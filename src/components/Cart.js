import React from 'react'
import './Cart.css'

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(/\$/g, ''))
    })
    return total
  }

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
      <button className="cart-proceed-btn">Invoice Me</button>
    </div>
  );
};

export default Cart;