import React from 'react'
import { Link } from 'react-router-dom'
import './ConfirmationPage.css'

const ConfirmationPage = () => {
  return (
    <div className='confirmation-page-container'>
      <div className='confirmation-page-intro'>
        <h1>Thank you for your order!</h1>
        <p>We have received your order and will send you an invoice in 2-3 business days.</p>
      </div>
      <div className='buttons'>
        <Link to='/' className="confirmation-button" style={{ textDecoration: 'none' }}>
          <button>Home</button>
        </Link>
        <Link to='/shop' className="confirmation-button" style={{ textDecoration: 'none' }}>
          <button>Shop</button>
        </Link>
        <Link to='/services' className="confirmation-button" style={{ textDecoration: 'none' }}>
          <button>Services</button>
        </Link>
      </div>
    </div>
  )
}

export default ConfirmationPage