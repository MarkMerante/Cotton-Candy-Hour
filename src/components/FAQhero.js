import React from 'react'
import { Link } from 'react-router-dom';
import "./FAQhero.css"

const FAQhero = () => {

    return (
        <div className="FAQ-container">
            <div className="FAQ-intro">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="FAQ-questions">
                <div className='question'>
                    <h3>WHAT TYPE OF SERVICES DO YOU DO?</h3>
                    <p>For an organizer wanting to provide cotton candy to guests, we usually do catering; either passing out tubs or making cotton candy cones free for guests. 
                       For events such as 1st birthdays or gender reveals, we also set up tables or make party favours available for guests.
                       For other events such as fundraisers or settings open to a higher number of people, we make sales on-the-spot.
                       All services vary in cost as all will be customized to the organizer’s liking. We are always open to more suggestions, therefore an accurate quote may be determined upon inquiry.
                    </p>
                    <p>Related Links:</p>
                    <p>☁️ See Services</p>
                    <p>☁️ See Contact Info</p>
                    <p>🍬 What do I need to know before inquiring?</p>
                    <p>🍬 Cotton Candy Catering Pricing</p>
                </div>
                <div className='question'>
                    <h3>WHAT DO I NEED TO KNOW BEFORE INQUIRING?</h3>
                    <p>Looking into buying prepackaged cotton candy tubs? Or booking our services for an event (eg. catering, packaged cotton candy display)? Please send the following details for the corresponding inquiry:</p>
                    <p>Tubs:</p>
                    <p>☁️ Full Name</p>
                    <p>☁️ Email</p>
                    <p>🍬 Quantity</p>
                    <p>🍬 Flavour(s)</p>
                    <p>🍬 If Pick-Up, include preferred Date and Time</p>
                    <p>🍬 If Delivery, include complete address</p>
                    <p>Services:</p>
                    <p>☁️ Full Name</p>
                    <p>☁️ Email</p>
                    <p>🍬 Event Type</p>
                    <p>🍬 Service Type</p>
                    <p>🍬 Event Date</p>
                    <p>🍬 Event Venue</p>
                    <p>🍬 Service Time</p>
                    <p>🍬 # of Guests Estimate</p>
                    <p>🍬 Flavour(s) Wanted (max: 2)</p>
                    <p>Having this information will save our team time into developing an accurate price quote. Please share as many details as possible. </p>
                    <p>Related Links:</p>
                    <p>☁️ See Flavours</p>
                    <p>☁️ See Contact Info </p>
                </div>
                <div className='question'>
                    <h3>DO YOU CHARGE BY THE HOUR OR BY QUANTITY?</h3>
                    <p>We do both for cotton candy catering, but pricing varies for other services!</p>
                    <p>See our Services page to view correct pricing, or contact us for an accurate quote.</p>
                    <p>Related Links:</p>
                    <p>☁️ See Services</p>
                    <p>☁️ See Contact Info</p>
                    <p>🍬 What type of services do you do?</p>
                </div>
                <div className='question'>
                    <h3>WHAT ARE YOUR MOST POPULAR FLAVOURS?</h3>
                    <p>Our classic flavours are most loved by our customers! Relive your childhood or share the sweetness with others as you can never go wrong with our two main flavours—blue raspberry and pink vanilla!</p>
                    <p>Our most requested specialty flavours are banana and bubblegum! Older crowds are often more attracted the banana flavour, but most people—especially kids can’t seem to stay away from bubblegum!</p>
                    <p>Related Links:</p>
                    <p>☁️ See Flavours</p>
                    <p>☁️ See Cotton Candy Tubs</p>
                </div>
                <div className='question'>
                    <h3>HOW LONG WILL THE TUBS TAKE TO DELIVER?</h3>
                    <p>Once payment is received, a confirmation will be sent to your email. The order will be delivered the following Saturday or Sunday. If express delivery is required, an additional $5 will be charged.</p>
                    <p>Related Links:</p>
                    <p>☁️ See Cotton Candy Tubs</p>
                </div>
            </div>
            <div className="FAQ-contact">
                <h3>Still have questions? Ask us directly!</h3>
            </div>
        </div>
    )
}

export default FAQhero