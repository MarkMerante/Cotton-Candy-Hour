import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./CartSlideIn.css";

const CartSlideIn = ({ isOpen, handleClick1, cart, removeFromCart}) => {
  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price.replace(/\$/g, ''))
    })
    return total.toFixed(2)
  }

  const cartSlideInRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && cartSlideInRef.current && !cartSlideInRef.current.contains(event.target)) {
        handleClick1();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, cartSlideInRef, handleClick1]);

  return (
    <div className={`cart-slide-in ${isOpen ? "show" : ""}`} ref={cartSlideInRef}>
      <div className="cart-header">
        <Link to='/cart' className="view-cart" style={{ textDecoration: 'none' }}>
          <button>View Cart</button>
        </Link>
        <i className="fas fa-times" onClick={handleClick1}/>
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
      <h2>Total: ${totalPrice()}</h2>
    </div>
  );
};

export default CartSlideIn;