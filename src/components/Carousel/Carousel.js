import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling

import sun from '../../assets/photos/sun.svg'
import wilderness from '../../assets/photos/wilderness.svg'
import eagle from '../../assets/photos/eagle.svg'
import earth from '../../assets/photos/earth.svg'
import arrow from '../../assets/photos/arrow.svg'


const Carousel = () => {
    const experienceData = [
        {
            title: 'ExtraHop Networks, Inc.',
            subtitle: 'Front End Engineer',
            description: 'Handles escalation and manage hot fixes on product launches as well as smaller releases',
            image: earth,
        },
        {
            title: 'Kaiser Siding & Roofing',
            subtitle: 'Lead Software Engineer',
            description: 'Grew sales pipeline by 25% through optimization of sales and upgrade tools',
            image: sun,
        },
        {
            title: 'Lennon Window Cleaning',
            subtitle: 'Web Architect',
            description: 'Architected performant company technological infrastructure with a modern touch',
            image: eagle,
        },
        {
            title: 'Together In The Woods',
            subtitle: 'Senior Front End Engineer',
            description: 'Crafted bespoke, dynamic website with React on the scalable foundation of GCP',
            image: wilderness,
        },
    ];
    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % experienceData.length;
        goToIndex(nextIndex);
    };

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + experienceData.length) % experienceData.length;
        goToIndex(prevIndex);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hideToLeft, setHideToLeft] = useState(false);
    const [hideToRight, setHideToRight] = useState(false);

    const goToIndex = (index) => {
        if (index > currentIndex) {
            setHideToLeft(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setHideToLeft(false);
                setHideToRight(true);
                setTimeout(() => {
                    setCurrentIndex(index);
                    setHideToRight(false);
                }, 400); // This should match the transition duration in CSS  
            }, 400); // This should match the transition duration in CSS
        } else if (index < currentIndex) {
            setHideToRight(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setHideToRight(false);
                setHideToLeft(true);
                setTimeout(() => {
                    setCurrentIndex(index);
                    setHideToLeft(false);
                }, 400);
            }, 400); // This should match the transition duration in CSS
        }
    };



    const currentItem = experienceData[currentIndex];

    return (
        <div className="carousel">
            <div
                className={`carousel-content ${hideToLeft ? 'hidden-left' : hideToRight ? 'hidden-right' : ''
                    } ${currentIndex % 2 === 0 ? 'text-left' : 'text-right'}`}
            >
                <div className={`text ${currentIndex % 2 === 0 ? 'title-left' : 'title-right'}`}>
                    <h2 className={`experience-company ${currentIndex % 2 === 0 ? 'company-left' : 'company-right'}`}>{currentItem.title}</h2>
                    <h3 className='experience-title'>{currentItem.subtitle}</h3>
                    <p className='experience-desc'>{currentItem.description}</p>
                </div>
                <div className={`image ${currentIndex % 2 === 0 ? 'img-right' : 'img-left'}`}>
                    <img src={currentItem.image} alt={currentItem.title} />
                </div>
            </div>
            <div className="carousel-buttons">
                {experienceData.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => goToIndex(index)}
                    >
                    </button>
                ))}
            </div>
            <div className="carousel-navigation">
                <button className="prev" onClick={goToPrevious}><img src={arrow} /></button>
                <button className="next" onClick={goToNext}><img src={arrow} /></button>
            </div>
        </div>
    );
};

export default Carousel;
