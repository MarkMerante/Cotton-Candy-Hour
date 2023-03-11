import React from "react"
import "./ContactHero.css"
import Weekday from "../images/weekday_calender.PNG"
import Weekend from "../images/weekend_calendar.PNG"

const ContactHero = () => {
    return (
        <div className="contact-hero-container">
            <div className="contact-hero-intro">
                <h3>CONTACT US</h3>
                <div className="contact-details ">
                    <h4>Email</h4>
                    <div className="content email" onClick={() => window.location.href = "mailto:chi@cottoncandyhour.com"}>
                        <h4 className="bolded-content bold-email" onClick={() => window.location.href = "mailto:chi@cottoncandyhour.com"}>Inquiry: </h4>
                        <p>chi@cottoncandyhour.com</p>
                    </div>
                    <div className="content email" onClick={() => window.location.href = "mailto:orders@cottoncandyhour.com"}>
                        <h4 className="bolded-content bold-email" onClick={() => window.location.href = "mailto:orders@cottoncandyhour.com"}>Orders: </h4>
                        <p>orders@cottoncandyhour.com</p>
                    </div>
                </div>
                <div className="contact-details">
                    <h4>Social Media</h4>
                    <div className="content socials" onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100088423180662'}>
                        <h4 className="bolded-content social">Facebook: </h4>
                        <p>/chicottoncandyhour</p>
                    </div>
                    <div className="content socials" onClick={() => window.location.href = 'https://www.instagram.com/cottoncandyhour'}>
                        <h4 className="bolded-content social">Instagram: </h4>
                        <p>cottoncandyhour</p>
                    </div>
                </div>
                <div className="contact-details">
                    <h4>Contact Form</h4>
                    <div className="content">
                        <h4 className="bolded-content">Website:</h4>
                        <p>Use the message box below</p>
                    </div>
                </div>
            </div>
            <div className="calendar-container">
                <div className="calendar-container-contents">
                    <h4>Hours of Service</h4>
                    <img src={Weekday} alt="Weekday Calendar" className="calendar-img"/>
                    <img src={Weekend} alt="Weekend Calendar" className="calendar-img"/>
                    <p>Please note that responses may be given within these time frames, however booked events may exceed the indicated times if approved.</p>
                </div>
            </div>
            <div className="outro">
                <h4> We'd love to hear from you!</h4>
                <p>Thank you for your interest in Chi's Cotton Candy Hour.</p>
            </div>
        </div>
    )

}

export default ContactHero