import React from "react";
import './Footer.css'
import logo from '../../assets/photos/wheat.svg'
import logobadge from '../../assets/photos/logo-badge.svg'
import usabadge from '../../assets/photos/usa-badge.svg'

const Footer = () => {
    const year = new Date().getFullYear();

    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    const relativeURL = window.location.pathname;
    console.log(relativeURL)

    return (
        <>
        <div className="footer-container">
            <div className="footer-left">
                <h2 className="footer-h2">Turning Vision into Digital Reality: Your Trusted Web Development and Software Partner</h2>
                <p className="call-cta">Reach out for a consultation or a free quote.</p>
                <a href="/contact" className="footer-connect serif">Connect</a>
                <div className="bottom-nav">
                    <a href="/" className={`bottom-nav-item ${relativeURL === '/' ? 'current-page' : ''}`}>Home</a>
                    {/* <a href="/reviews" className={`bottom-nav-item ${relativeURL === '/reviews' ? 'current-page' : ''}`}>Reviews</a> */}
                    <a href="/contact" className={`bottom-nav-item ${relativeURL === '/contact' ? 'current-page' : ''}`}>Contact</a>
                </div>  
                <p className="bottom-nav-fine">Copyright  ©   2018-{year}   Matt Puleri, all rights reserved.</p>
                <p className="bottom-nav-fine bottom-push">Enjoy the rest of your {dayOfWeek}!</p>
  
            </div>
            <div className="logo-lisence-wrapper">
                <img onClick={() => window.location.href = '/' } alt="Lennon Window Cleaning logo" className='footer-logo' src={logo}/>
                <div className="lisenced-bonded-div">
                    <p className="serif">Engineered by Matt Puleri</p>
                    <img alt="Made by Matt Puleri" className='badge' src={logobadge} />
                    <p className="serif">Made in the USA</p>
                    <img alt="Made in USA" className='badge' src={usabadge} />
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer