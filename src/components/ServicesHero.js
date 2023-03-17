import React from 'react'
import {Link} from 'react-router-dom'
import './ServicesHero.css'
import ServicesTop from "../images/services-top.PNG"

const ServicesHero = () => {

    return (
        <div className='services-hero-container'>
            <div className='top-image'>
                <img src={ServicesTop}  alt='Cotton Candy Tubs' />
            </div>
            <div className='services-intro'>
                <h1>SERVICES</h1>
                <p>"What's your business about?"</p>
                <p>We offer a variety of services and personalize them into what we think would be best for each of our customers!</p>
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
                        <h1>SPECIAL OCCASIONS</h1>
                        <p>Parties, gatherings, and other social events!</p>
                    </div>
                </Link>
                <Link to="/services/fundraising" style={{ textDecoration: 'none' }}>
                    <div className='specials-list fundraising'>
                        <img 
                            className='specials-list-image' 
                            src="images/fundraising.JPG"/>
                        <br />
                        <h1>FUNDRAISING</h1>
                        <p>Working for a good cause? Tell us about it!</p>
                    </div>
                </Link>
                <Link to="/services/carnival" style={{ textDecoration: 'none' }}>
                    <div className='specials-list carnival'>
                        <img 
                            className='specials-list-image' 
                            src="images/carnival.JPG"/>
                        <br />
                        <h1>CARNIVAL</h1>
                        <p>Looking for a sweet attraction? This service would be perfect for you!</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ServicesHero