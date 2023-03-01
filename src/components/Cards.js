import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Hi What can we help you with?</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Shop page.jpg"
                        text="Explore different flavours such as Blue Raspberry"
                        label="Shop"
                        path="/shop"
                        />
                        <CardItem 
                        src="images/Events Page.jpg"
                        text="See more on inquiries on events pricing and More!"
                        label="Services"
                        path="/services"
                        />
                        <CardItem 
                        src="images/About page.jpg"
                        text="Click to know more about us!"
                        label="About us"
                        path="/aboutUs"
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
