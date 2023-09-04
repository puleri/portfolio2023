// CustomCursor.js
import React, { useState, useEffect } from 'react';

const CustomCursor = (props) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const meetmeImage = document.querySelector('.custom-cursor-target');

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (meetmeImage) {
      meetmeImage.addEventListener('mouseenter', handleMouseEnter);
      meetmeImage.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      if (meetmeImage) {
        meetmeImage.removeEventListener('mouseenter', handleMouseEnter);
        meetmeImage.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${props.visible ? 'active' : 'inactive'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: 'fixed', // Use fixed position to stay in place while scrolling
      }}
    ></div>
  );
};

export default CustomCursor;
