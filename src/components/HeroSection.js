import React, {useState,useEffect,useRef} from 'react'
import '../App.css'
import './HeroSection.css'
import HomeHero from '../images/home-hero2.PNG'
import HomeHeroVid from '../images/home-hero.MP4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay muted={true} loop={true} src={HomeHeroVid} />
            <img src={HomeHero} className='ChiHome' alt="Hero Image" />
        </div>
    )
}

export default HeroSection