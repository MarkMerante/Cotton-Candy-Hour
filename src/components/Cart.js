import React, { useState } from 'react'
import axios from 'axios'
import './Cart.css'
import InvoiceForm from './InvoiceForm';
import { Navigate } from 'react-router-dom'

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(/\$/g, ''))
    })
    return total.toFixed(2)
  }

  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleInvoiceClick = () => {
    if (cart.length === 0) {
      alert('Please add items to your cart before proceeding to invoice.');
    } else {
      setShowInvoiceForm(true)
    }
  }
  const handleInvoiceFormClose = () => setShowInvoiceForm(false);

  const handleInvoice = (userInput) => {
    const items = cart.map((item) => {
      return {
        title: item.title,
        price: item.price,
      }
    })
  
    const emailBody = JSON.stringify({
      items: items,
      totalPrice: totalPrice(),
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      email: userInput.email,
    })
  
    // const emailApiUrl = 'http://127.0.0.1:8000/send-invoice/' // testing //

    const emailApiUrl = 'https://cchback.azurewebsites.net/send-invoice/'
  
    axios
      .post(emailApiUrl, emailBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setShowInvoiceForm(false)
          setShowSuccessMessage(true)
          clearCart()
        } else {
          throw new Error('Failed to send email')
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to send invoice request. Please try again later.');
      });
  };


  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-image-container">
              <img src={item.coverImg} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-price">{item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="cart-delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      <p className="cart-total-price">Total Price: ${totalPrice()}</p>
      {!showInvoiceForm && (
        <button onClick={handleInvoiceClick} className="cart-proceed-btn">Invoice Me</button>
      )}
      {showInvoiceForm && (
        <div className="invoice-form-overlay">
          <div className="invoice-form-wrapper">
            <InvoiceForm handleInvoice={handleInvoice} handleInvoiceFormClose={handleInvoiceFormClose} />
          </div>
        </div>
      )}

      {showSuccessMessage && <Navigate to="/confirmation" />}
    </div>
  );
};

export default Cart;