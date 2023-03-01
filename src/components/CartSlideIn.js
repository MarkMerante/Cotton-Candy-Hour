import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./CartSlideIn.css";

const CartSlideIn = ({ isOpen, handleClick1, cart, removeFromCart}) => {
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(/\$/g, ''))
    })
    return total
  }

  return (
    <div className={`cart-slide-in ${isOpen ? "show" : ""}`}>
      <div className="cart-header">
        <h2>Total: ${totalPrice()}</h2>
        <Link to='/cart' className="view-cart" style={{ textDecoration: 'none' }}>
          <button>View Cart</button>
        </Link>
      </div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="item-image-container">
              <img src={item.coverImg} alt={item.title} />
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartSlideIn;