import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'
import logo from '../images/logo1.png'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/Chi2.MP4' className='ChiHome' autoPlay={true} loop={false} muted={true} />
            {/* <img src={logo} className="Logo" /> */}
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection