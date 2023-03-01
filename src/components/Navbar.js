import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo1.png'

const Navbar = ({size, handleClick1}) => {
    const [click, setClick] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);
    
    const logoClassName = width >= 1050 ?  'navbar-logo' : 'navbar-logo logo'

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className={logoClassName} onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                        <h1>Chi's Cotton Candy Hour</h1>
                        {width <= 1050 && <img src={logo} alt="Logo" className="logo"/>}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                                Shop
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/flavours' className='nav-links' onClick={closeMobileMenu}>
                                Flavours
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="cart" onClick={handleClick1}>
                        <span><i className="fas fa-cart-plus"></i></span>
                        <span>{size}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar