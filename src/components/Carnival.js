import React from 'react'
import './Carnival.css'
import CarnivalImage from "../images/carnival_img.PNG"

function Carnival() {

    return(
        <div className="carnival-container">
            <div className='carnival-intro'>
                <h1>CARNIVAL</h1>
                <p>For this carnival-style option, we make cotton candy cone sales or pre-packaged tub sales, or both! We sell our product on-the-spot, and all the organizer needs to pay is the $50 deposit!</p>
            </div>
            <div className='carnival-img-container'>
                <img src={CarnivalImage} alt="Carnival" className="carnival-img" />
            </div>
            <div className='carnival-statement'>
                <p>If interest in any of our services, we recommend you to inquire as soon as possible. Weekend services are in high-demand, and our schedule gets filled very quickly. Please note that depending on the type of inquiry and how much information is share, response with the price quote may take about 2-7 business days.</p>
            </div>
            <div className='carnival-closing-statement'>
                <p>Ready for the excitement?</p>
                <p>Reserve your event by sending an inquiry using the <a href='#footer-subscription-heading'>message box</a> below!</p>
            </div>
        </div>
    )
}

export default Carnival