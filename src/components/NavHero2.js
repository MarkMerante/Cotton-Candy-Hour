import React from 'react'
import second_logo from "../images/second_logo.png"
import "./NavHero2.css"

const NavHero2 = () => {
    return (
        <div className="nav-hero-2-container">
            <div className='second-logo'>
                <img src={second_logo} alt="Second Logo" />
            </div>
        </div>
    )
}

export default NavHero2