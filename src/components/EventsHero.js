import React from 'react'
import '../App.css'
import './HeroSection.css'
import './FlavourPage.css'


function EventsHero() {
    return (
        <div className='EventsMain'>
            {/* <div className='container'>
                <img src='/images/CCCH Events.png' className='cchEvents'/>     
            </div> */}
            <div className='hero-container'>
                <video src='/videos/Events2.MP4' className='events-video' autoPlay={true} loop={false} muted={true} />     
            </div>
        </div>
        
    )
}

export default EventsHero