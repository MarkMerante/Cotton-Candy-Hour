import React from 'react'
import './HeroImages.css'
import HeroImagesData from './HeroImagesData'

const HeroImages = () => {
    const HeroImgCard = HeroImagesData.map(cards => {
        return (
            <img src={cards.image} className="hero-img" />
        )
    })

    return (
        <div className='hero-img-container'>
            <div className='intro-heading'>
                <h2>Digital Gallery</h2>
                <p>All services booked with Chi's Cotton Candy Hour come with complementary custom, digital signs, displayed during hours of service! These posters are prepared to match the theme of the event!</p>
            </div>
            <div className='hero-images'>
                {HeroImgCard}
            </div>
        </div>
    )
}

export default HeroImages