import React, { useState } from 'react';
import './HamburgerButton.css'; // Make sure to import your CSS file

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`hamburger-overlay ${isOpen ? 'open' : ''}`}>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default HamburgerButton;
