import React from "react";
import './AboutHero.css'
import FounderImage from "../images/founder-laptop-width.PNG"
import CoFounderImage from "../images/co-founders-laptop-width.PNG"
import FounderImage1 from "../images/founder-phone.PNG"
import CoFounderImage1 from "../images/co-founder1-phone.PNG"
import CoFounderImage2 from "../images/co-founder2-phone.PNG"

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
            <div className="phone">
            <img src={FounderImage1} className="phone-images" alt="Founder" />
            <img src={CoFounderImage1} className="phone-images" alt="Founder" />
            <img src={CoFounderImage2} className="phone-images" alt="Founder" />
            </div>
        </div>
    )
}

export default AboutHero