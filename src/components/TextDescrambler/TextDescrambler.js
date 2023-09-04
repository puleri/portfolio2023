import React, { useEffect, useRef, useState } from 'react';

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
  
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
  
      this.currentFrame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = '';
      let complete = 0;
  
      for (let i = 0, n = this.queue.length; i < n; i++) {
        const { from, to, start, end, char } = this.queue[i];
  
        if (this.currentFrame >= end) {
          complete++;
          output += to;
        } else if (this.currentFrame >= start) {
          if (!char || Math.random() < 0.28) {
            this.queue[i].char = this.randomChar();
          }
          output += `<span class="dud">${this.queue[i].char}</span>`;
        } else {
          output += from;
        }
      }
  
      this.el.innerHTML = output;
  
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        setTimeout(() => {
          this.currentFrame++;
          this.update();
        }, 50); // milliseconds delay between frames
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  

  const TextDescrambler = ({ phrases }) => {
    const textRef = useRef(null);
    const textScramble = useRef(null);
    const [completedPhrases, setCompletedPhrases] = useState([]);
    const [isDone, setIsDone] = useState(false);
  
    useEffect(() => {
      // Function to initialize the TextScramble
      const initializeTextScramble = () => {
        textScramble.current = new TextScramble(textRef.current);
  
        const next = () => {
          if (phrases.length === 0) {
            setIsDone(true); // No phrases to display, mark as done
            return;
          }
  
          textScramble.current.setText(phrases.shift()).then(() => {
            const currentPhrase = textScramble.current.el.innerText;
            setCompletedPhrases([currentPhrase, ...completedPhrases]);
  
            if (phrases.length > 0) {
              setTimeout(next, 200);
            } else {
              setIsDone(true); // Mark as done when all phrases are displayed
            }
          });
        };
  
        next();
      };
  
      // Intersection Observer configuration
      const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.1, // Trigger when 10% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in the viewport, initialize the TextScramble
            initializeTextScramble();
            observer.unobserve(textRef.current); // Stop observing once initialized
          }
        });
      }, observerOptions);
  
      // Start observing the element
      observer.observe(textRef.current);
  
      return () => {
        // Clean up the observer when the component unmounts
        observer.disconnect();
      };
    }, [phrases, completedPhrases]);
  
    return (
      <div className={`${isDone ? 'done' : ''}`} ref={textRef}>
        {completedPhrases.map((phrase, index) => (
          <div key={index} className="completed-phrase">
            {phrase}
          </div>
        ))}
      </div>
    );
  };
  
  export default TextDescrambler;
  