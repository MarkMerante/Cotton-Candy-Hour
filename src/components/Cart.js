import React from 'react'
import axios from 'axios'
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(/\$/g, ''))
    })
    return total
  }

  const handleInvoice = () => {
    const items = cart.map((item) => {
      return {
        title: item.title,
        price: item.price,
      };
    });
  
    const emailBody = JSON.stringify({
      items: items,
      totalPrice: totalPrice(),
    });
  
    const emailApiUrl = 'http://127.0.0.1:8000/send-invoice/' // testing //

    // const emailApiUrl = 'https://cchback.azurewebsites.net/send-invoice/'
  
    axios
      .post(emailApiUrl, emailBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert('Invoice request sent successfully!');
        } else {
          throw new Error('Failed to send email');
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
      <button onClick={handleInvoice} className="cart-proceed-btn">Invoice Me</button>
    </div>
  );
};

export default Cart;