import React from "react";
import './AboutHero.css'
import FounderImage from "../images/founder-laptop-width.PNG"
import CoFounderImage from "../images/co-founders-laptop-width.PNG"

const AboutHero = () => {
    return (
        <div className="about-hero-container">
            <div className="about-hero-intro">
                <h1>Meet the team!</h1>
            </div>
            <div className="laptop">
                <img src={FounderImage} className="laptop-images" alt="Founder" />
                <img src={CoFounderImage} className="laptop-images" alt="Founder" />
            </div>
            <div className="co-founders"></div>
        </div>
    )
}

export default AboutHero