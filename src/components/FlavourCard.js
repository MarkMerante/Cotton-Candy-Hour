import React from 'react';
import './FlavourCard.css';
import '../App'

import { useNavigate } from 'react-router-dom';

export default function FlavourCard(props) {
    const navigate = useNavigate();

    return (
        <div className="card">
            <img
                className="card--image" 
                src={props.src}
                onClick={() => navigate(`/${props.type}/${props.id}`)}
            />
            <h3>{props.title}</h3>
            <span className='priceSpan'>{props.price}</span>
            <button
                onClick={props.addToCart}
                className='cartButton'>Add to Cart</button>
        </div>
    )
}

