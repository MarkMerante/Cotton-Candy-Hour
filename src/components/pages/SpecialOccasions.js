import React from 'react'
import './SpecialOccasions.css'

function SpecialOccasions() {

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
                    <h3>Pricing</h3>
                    <div className='booking'>
                        <p>Booking Fee: $50.00 </p>
                        <p>☁️ to be paid 3 weeks prior to event to save the date </p>
                        <p>🍬 $25.00 will be returned once the event is completed</p>
                    </div>
                    <div className='hourly-rate'>
                        <p>Hourly Rate: Unlimited by the Hour</p>
                        <p>Best for large groups!</p>
                        <p>☁️ $80.00/hour: 1 classic flavour</p>
                        <p>☁️ $85.00/hour: 2 classic flavours OR 1 special flavour</p>
                        <p>☁️ $90.00/hour: 1 classic flavour & 1 special flavour</p>
                        <p>☁️ $95.00/hour: 2 special flavours</p>
                        <p>🍬 24 oz tubs would be an additional $2 each (calculated afterwards)</p>
                        <p>An unlimited amount will distributed within the time range.</p>
                    </div>
                    <div className='reduced-hourly-rate'>
                        <p>Reduced Hourly Rate: Price by Quantity</p>
                        <p>Best for small groups!</p>
                        <p>☁️ $25.00/hour</p>
                        <p>🍬 $4.00/classic cone</p>
                        <p>🍬 $4.50/specialty cone</p>
                        <p>🍬 $5.00/tub</p>
                        <p>🍬 $1.00/empty tub</p>
                        <p>Total will be calculated and invoiced within 2 days after the event.</p>
                    </div>
                </div>
                <div className='special-occasions-statement'>
                    <p>Upon agreement, Chi’s Cotton Candy Hour will send an invoice with the booking fee as well as the hourly cost of service. The organizer will need to pay the remaining invoiced at least 3 days prior to the event date. If another invoice is calculated after the event, the organizer will have to pay the amount due within a week from the invoice date.</p>
                </div>
            </div>
            <div className='special-occasions-questions'>
                <p>Any Questions?</p>
            </div>
        </div>
    )
}

export default SpecialOccasions