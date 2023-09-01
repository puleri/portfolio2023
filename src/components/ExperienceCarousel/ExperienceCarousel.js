import React, { useState, useEffect } from 'react';
import './ExperienceCarousel.css'; // Make sure to import your CSS file

import arrow from '../../assets/photos/arrow.svg'

const experienceData = [
  {
    title: 'First Experience',
    subtitle: 'Subtitle 1',
    description: 'Description 1',
    image: 'image-url-1.jpg',
  },
  {
    title: 'Second Experience',
    subtitle: 'Subtitle 2',
    description: 'Description 2',
    image: 'image-url-2.jpg',
  },
  {
    title: 'Third Experience',
    subtitle: 'Subtitle 3',
    description: 'Description 3',
    image: 'image-url-3.jpg',
  },
  {
    title: 'Fourth Experience',
    subtitle: 'Subtitle 4',
    description: 'Description 4',
    image: 'image-url-4.jpg',
  },
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextLeft, setIsTextLeft] = useState(true);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        goToNextExperience();
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToExperience = (index) => {
    setCurrentIndex(index);
    setAutoplay(false);
    setIsTextLeft(!isTextLeft);
  };

  const goToNextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceData.length);
    setIsTextLeft(!isTextLeft);
  };

  const goToPreviousExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    );
    setIsTextLeft(!isTextLeft);
  };

  const currentExperience = experienceData[currentIndex];

  return (
    <div className="experience-carousel">
      <div className="carousel-container">
        <button className="carousel-arrow arrow-left" onClick={goToPreviousExperience}>
        <img src={arrow}/>
        </button>
        <div className={`carousel-content ${isTextLeft ? 'text-left' : 'text-right'}`}>
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="carousel-text">
                <h2>{experience.title}</h2>
                <h3>{experience.subtitle}</h3>
                <p>{experience.description}</p>
              </div>
              <div className="carousel-image">
                <img src={experience.image} alt={experience.title} />
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow arrow-right" onClick={goToNextExperience}>
            <img src={arrow}/>
        </button>
      </div>
      <div className="carousel-buttons">
        {experienceData.map((experience, index) => (
          <button
            key={index}
            className={`carousel-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToExperience(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;
