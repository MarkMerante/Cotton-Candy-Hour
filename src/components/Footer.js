import React from 'react'
import './Footer.css'
import Email from './Email'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <section className="footer-subscription">
                    <p id="footer-subscription-heading">
                        Contact Us
                    </p>
                </section>
                <Email />
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='https://www.facebook.com/profile.php?id=100088423180662'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='https://www.instagram.com/cottoncandyhour'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <a
                                className='social-icon-link email'
                                href='mailto:chi@cottoncandyhour.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Email'
                            >
                                <i class='fa fa-envelope' />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div className='footer-information'>
                <p id='cursive-p'>Thank you for your interest in Chi's Cotton Candy Hour</p>
                <p id='cursive-che'>Cheerie-Ann</p>
                <div className='credits'>
                    <p id='legal'>Chi's Cotton Candy Hour © 2023</p>
                    <p>Developed by Mark Merante</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer