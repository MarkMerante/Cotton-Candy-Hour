import React from 'react'
import '../../App.css'
import ShopHero from '../ShopHero'

function Shop({addToCart}) {
    return (
        <>
            <ShopHero addToCart={addToCart}/>
        </>
    )
}

export default Shop