import React from "react";
import Navbar from "../NavBar/NavBar";

import './ThankYou.css'

const ThankYou = () => {
    return (
        <>
            <Navbar />
            <div className="thank-you-div center-page">
                <h1 className="thank-you">Thank You!</h1>
                <p className="get-back">Get back to you soon. Look forward to getting in touch.</p>
                <a className="home-btn serif footer-connect" href="/">Home</a>
            </div>
        </>
    )
}

export default ThankYou