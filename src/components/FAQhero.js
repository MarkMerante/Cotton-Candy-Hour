import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./FAQhero.css"

const FAQhero = () => {
    const [activeQuestion, setActiveQuestion] = useState(null)

    const handleQuestionClick = (id) => {
        setActiveQuestion(id === activeQuestion ? null : id)
    }

    return (
        <div className="FAQ-container">
            <div className="FAQ-intro">
                <h1>FAQ</h1>
                <h4>Frequently Asked Questions</h4>
            </div>
            <div className="FAQ-questions">
                <div className='question'>
                    <h3 className={`question-visible 
                        ${activeQuestion === 1 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(1)}
                    >
                        <i className={activeQuestion === 1 ? 'fas fa-minus' : 'fas fa-plus'} />
                        WHAT TYPE OF SERVICES DO YOU DO?
                    </h3>
                    <div className={`hidden ${
                        activeQuestion === 1 ? 'active' : ''
                        }`}
                    >
                        <div className='question-content'>
                            <p>For an organizer wanting to provide cotton candy to guests, we usually do catering; either passing out tubs or making cotton candy cones free for guests. 
                               For events such as 1st birthdays or gender reveals, we also set up tables or make party favours available for guests.
                               For other events such as fundraisers or settings open to a higher number of people, we make sales on-the-spot.
                               All services vary in cost as all will be customized to the organizer’s liking. We are always open to more suggestions, therefore an accurate quote may be determined upon inquiry.
                            </p>
                            <div className='related-links'>
                                <p>Related Links:</p>
                                <p>☁️ See <Link to='/services'>Services</Link></p>
                                <p>☁️ See <Link to='/contact'>Contact Info</Link></p>
                                <p onClick={() => handleQuestionClick(2)} className='p-links'>🍬 What do I need to know before inquiring?</p>
                                <p onClick={() => handleQuestionClick(3)} className='p-links'>🍬 Cotton Candy Catering Pricing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='question'>
                    <h3 className={`question-visible 
                        ${activeQuestion === 2 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(2)}
                    >
                        <i className={activeQuestion === 2 ? 'fas fa-minus' : 'fas fa-plus'} />
                        WHAT DO I NEED TO KNOW BEFORE INQUIRING?</h3>
                    <div className={`hidden ${
                        activeQuestion === 2 ? 'active' : ''
                        }`}
                    >
                        <div className='question-content'>
                            <p>Looking into buying prepackaged cotton candy tubs? Or booking our services for an event (eg. catering, packaged cotton candy display)? Please send the following details for the corresponding inquiry:</p>
                            <div className='question-content-details'>
                                <p>Tubs:</p>
                                <p>☁️ Full Name</p>
                                <p>☁️ Email</p>
                                <p>🍬 Quantity</p>
                                <p>🍬 Flavour(s)</p>
                                <p>🍬 If Pick-Up, include preferred Date and Time</p>
                                <p>🍬 If Delivery, include complete address</p>
                            </div>
                            <div className='question-content-details'>
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
                            </div>
                            <p>Having this information will save our team time into developing an accurate price quote. Please share as many details as possible. </p>
                            <div className='related-links'>
                                <p>Related Links:</p>
                                <p>☁️ See <Link to='/flavours'>Flavours</Link></p>
                                <p>☁️ See <Link to='/contact'>Contact Info</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='question'>
                    <h3 className={`question-visible 
                        ${activeQuestion === 3 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(3)}
                    >
                        <i className={activeQuestion === 3 ? 'fas fa-minus' : 'fas fa-plus'} />
                        DO YOU CHARGE BY THE HOUR OR BY QUANTITY?</h3>
                    <div className={`hidden ${
                        activeQuestion === 3 ? 'active' : ''
                        }`}
                    >
                        <div className='question-content'>
                            <p>We do both for cotton candy catering, but pricing varies for other services!</p>
                            <p>See our Services page to view correct pricing, or contact us for an accurate quote.</p>
                            <div className='related-links'>
                                <p>Related Links:</p>
                                <p>☁️ See <Link to='/services'>Services</Link></p>
                                <p>☁️ See <Link to='/contact'>Contact Info</Link></p>
                                <p onClick={() => handleQuestionClick(1)} className='p-links'>🍬 What type of services do you do?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='question'>
                    <h3 className={`question-visible 
                        ${activeQuestion === 4 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(4)}
                    >
                        <i className={activeQuestion === 4 ? 'fas fa-minus' : 'fas fa-plus'} />
                        WHAT ARE YOUR MOST POPULAR FLAVOURS?</h3>
                    <div className={`hidden ${
                        activeQuestion === 4 ? 'active' : ''
                        }`}
                    >
                        <div className='question-content'>
                            <p>Our classic flavours are most loved by our customers! Relive your childhood or share the sweetness with others as you can never go wrong with our two main flavours—blue raspberry and pink vanilla!</p>
                            <p>Our most requested specialty flavours are banana and bubblegum! Older crowds are often more attracted the banana flavour, but most people—especially kids can’t seem to stay away from bubblegum!</p>
                            <div className='related-links'>
                            <p>Related Links:</p>
                                <p>☁️ See <Link to='/flavours'>Flavours</Link></p>
                                <p>☁️ See <Link to='/shop'>Cotton Candy Tubs</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='question'>
                    <h3 className={`question-visible 
                        ${activeQuestion === 5 ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(5)}
                    >
                        <i className={activeQuestion === 5 ? 'fas fa-minus' : 'fas fa-plus'} />
                        HOW LONG WILL THE TUBS TAKE TO DELIVER?</h3>
                    <div className={`hidden ${
                        activeQuestion === 5 ? 'active' : ''
                        }`}
                    >
                        <div className='question-content'>
                            <p>Once payment is received, a confirmation will be sent to your email. The order will be delivered the following Saturday or Sunday. If express delivery is required, an additional $5 will be charged.</p>
                            <div className='related-links'>
                                <p>Related Links:</p>
                                <p>☁️ <Link to='/shop'>Cotton Candy Tubs</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FAQ-contact">
                <h3>Still have questions? <a href='#footer-subscription-heading'>Ask us directly!</a></h3>
            </div>
        </div>
    )
}

export default FAQhero