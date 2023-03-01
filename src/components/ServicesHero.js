import React from 'react'
import {Link} from 'react-router-dom'
import './ServicesHero.css'

const ServicesHero = () => {

    return (
        <div className='services-hero-container'>
            <div className='services-intro'>
                <h1>SERVICES</h1>
                <p>We often get the question, "What's your business about?". We offer a variety of services and personalize them ino what we think would be best for each of our customers!</p>
                <br />
                <br />
                <p>Our main inquiries fall into the following categories:</p>
            </div>
            <div className='specials-list-container'>
                <Link to="/services/special-occasions" style={{ textDecoration: 'none' }}>
                    <div className='specials-list special-occasions'>
                        <img 
                            className='specials-list-image' 
                            src="images/special ocassions.JPG"/>
                        <br />
                        <h3>SPECIAL OCCASIONS</h3>
                        <span>Parties, gatherings, and other social events!</span>
                    </div>
                </Link>
                <Link to="/services/fundraising" style={{ textDecoration: 'none' }}>
                    <div className='specials-list fundraising'>
                        <img 
                            className='specials-list-image' 
                            src="images/fundraising.JPG"/>
                        <br />
                        <h3>FUNDRAISING</h3>
                        <span>Working for a good cause? Tell us about it!</span>
                    </div>
                </Link>
                <Link to="/services/carnival" style={{ textDecoration: 'none' }}>
                    <div className='specials-list carnival'>
                        <img 
                            className='specials-list-image' 
                            src="images/carnival.JPG"/>
                        <br />
                        <h3>CARNIVAL</h3>
                        <span>Looking for a sweet attraction? This service would be perfect for you!</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ServicesHero