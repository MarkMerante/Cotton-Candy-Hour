import React from 'react'
import './Fundraising.css'
import Fundraise from "../images/fundraising_img.PNG"

function Fundraising() {

    return(
        <div className="fundraising-container">
            <div className='fundraising-intro'>
                <h1>FUNDRAISING</h1>
                <p>LOOKING TO PROPOSE A DEAL?</p>
                <p>IF YOU'RE HOSTING AN EVENT WITH A CAUSE, WE'D LOVE TO HEAR MORE ABOUT IT. ESPECIALLY IF IT ALIGNS WITH OUR PURPOSE!</p>
            </div>
            <div className='fundraising-img-container'>
                <img src={Fundraise} alt="Fundraising" className="fundraising-img" />
            </div>
            <div className="fundraising-statement">
                <p>For our fundraising option, we make live tub sales during an event, but the organizer will make a deposit payment. Both parties will meet and discuss terms and anything regarding sales and outcome. Size, flavour(s), quantity, price, etc. will be discussed if approved, as well as the percentage in which will go towards the cause. Chi's Cotton Candy Hour will finalize an agreement, and both parties will review and sign the contract.</p>
                <p> Fundraising inquiries typically require more time for planning, therefore the earlier the inquiry is made, the better.</p>
            </div>
            <div className="fundraising-closing-statement">
                <p>Hesitating to reach out?</p>
                <p>Submit a summary of your upcoming event along with your organization's goals and intentions, and we can start there!</p>
            </div>
        </div>
    )
}

export default Fundraising