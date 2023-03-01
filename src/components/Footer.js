import React from 'react'
import './Footer.css'
import Email from './Email'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-information'>
                    <p>Local business based in Winnipeg, Manitoba.</p>
                    <p>We offer pre-packaged tubs and cotton candy services! All cotton candy are freshly made the day of pickup, delivery, or event date.</p>
                </div>
                <section className="footer-subscription">
                    <p className="footer-subscription-heading">
                        Contact Us
                    </p>
                </section>
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
                            <Link
                                class='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Email />
        </div>
    )
}

export default Footer