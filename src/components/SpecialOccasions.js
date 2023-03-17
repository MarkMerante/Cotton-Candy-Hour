import React, { useState } from 'react'
import './SpecialOccasions.css'

function SpecialOccasions() {
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    function handleToggle1() {
        setShowContent1(!showContent1);
    }
    
    function handleToggle2() {
        setShowContent2(!showContent2);
    }  

    function handleToggle3() {
        setShowContent3(!showContent3);
    }  

    return(
        <div className="special-occasions-container">
            <div className='special-occasions-intro'>
                <h1>SPECIAL OCCASIONS</h1>
                <p>We love to customize our services no matter what type of event it is! Whether it’s a 7th birthday, a gender reveal, small gatherings, or even a cocktail party, we’d be happy to bring in the sweets! </p>
            </div>
            <div className='special-occasions-catering'>
                <div className='special-occasions-catering-intro'>
                    <h2>CATERING</h2>
                    <p>Our most popular option!</p>
                    <p>Cotton Candy catering is where cotton candy cones and tubs are served FOR FREE to guests in an event. The host or event organizer will be responsible for service payment.</p>
                </div>
                <div className='special-occasions-catering-pricing'>
                    <div className='special-occasions-list booking'>
                        <div className='special-occasions-contents first'>
                            <div className='sc-contents-intro'>
                                <p className='special-font'>Required</p>
                                <h2>BOOKING FEE</h2>
                                <span>SAVE THE DATE!</span>
                            </div>
                            <h2 className='sc-contents-main-price'>$50</h2>
                            <div className='sc-dropdown' onClick={handleToggle1}>
                                <h3>Details</h3>
                                <i className={`fas ${showContent1 ? 'fa-angle-up' : 'fa-angle-down'}`}  />
                            </div>
                            {showContent1 && (
                                <div className='p-content'>
                                    <p>To be paid 3 weeks prior to event to save the date </p>
                                    <br />
                                    <p>$25.00 will be returned once the event is completed</p>
                                </div>
                            )}
                            <button className='special-button' onClick={() => window.location.href = '#footer-subscription-heading'}>BOOK OUR SERVICE</button>
                        </div>
                    </div>
                    <div className='special-occasions-list hourly-rate'>
                        <div className='special-occasions-contents second'>
                            <div className='sc-contents-intro'>
                                <p className='special-font'>Best for large groups!</p>
                                <h2>HOURLY RATE</h2>
                                <span>UNLIMITED BY THE HOUR</span>
                            </div>
                            <div className='hourly-rate-price'>
                                <h2>$85-$95</h2>
                                <span>/hour</span>
                            </div>
                            <div className='sc-dropdown' onClick={handleToggle2}>
                                <h3>Rates</h3>
                                <i className={`fas ${showContent2 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </div>
                            {showContent2 && (
                                <div className='p-content'>
                                    <p>☁️ $80.00/hour: 1 classic flavour</p>
                                    <p>☁️ $85.00/hour: 2 classic flavours OR 1 special flavour</p>
                                    <p>☁️ $90.00/hour: 1 classic flavour & 1 specialty flavour</p>
                                    <p>☁️ $95.00/hour: 2 specialty flavours</p>
                                    <p>🍬 $0.50/bag (small)  <span className='optional'>optional</span></p>
                                    <p>🍬 $1.00/tub (24oz)  <span className='optional'>optional</span></p>
                                    <br />
                                    <p>An unlimited amount will distributed within the time range.</p>
                                </div>
                            )}
                            <button className='special-button' onClick={() => window.location.href = '#footer-subscription-heading'}>SEND A REQUEST</button>
                        </div>
                    </div>
                    <div className='special-occasions-list reduced-hourly-rate'>
                        <div className='special-occasions-contents third'>
                            <div className='sc-contents-intro'>
                                <p className='special-font'>Best for small groups!</p>
                                <h2>REDUCED HOURLY RATE</h2>
                                <span>PRICE BY QUANTITY</span>
                            </div>
                            <h2 className='sc-contents-main-price'>$25+</h2>
                            <div className='sc-dropdown' onClick={handleToggle3}>
                                <h3>Breakdown</h3>
                                <i className={`fas ${showContent3 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </div>
                            {showContent3 && (
                                <div className='p-content'>
                                    <p>☁️ $25.00/hour</p>
                                    <p>🍬 $4.00/classic cone</p>
                                    <p>🍬 $4.50/specialty cone</p>
                                    <p>🍬 $5.00/tub (24oz)</p>
                                    <p>🍬 $1.00/empty tub (24)</p>
                                    <br />
                                    <p>Total will be calculated and invoiced within 2 days after the event.</p>
                                </div>
                            )}
                            <button className='special-button' onClick={() => window.location.href = '#footer-subscription-heading'}>SEND A REQUEST</button>
                        </div>
                    </div>
                </div>
                <div className='special-occasions-statement'>
                    <p>Upon agreement, Chi’s Cotton Candy Hour will send an invoice with the booking fee as well as the hourly cost of service. The organizer will need to pay the remaining invoiced at least 3 days prior to the event date. If another invoice is calculated after the event, the organizer will have to pay the amount due within a week from the invoice date.</p>
                </div>
            </div>
            <div className='special-occasions-questions'>
                <a href='#footer-subscription-heading'>Any Questions?</a>
            </div>
        </div>
    )
}

export default SpecialOccasions