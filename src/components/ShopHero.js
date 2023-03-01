import React, {useState} from 'react'
import '../App.css'
import './ShopHero.css'
import FlavourCard from './FlavourCard'
import classics from './Classics'
import specials from './Specials'

function ShopHero({addToCart}) {
    const [cart, setCart] = useState([]);

    const classicCards = classics.map(item => {
        return (
            <FlavourCard
                src={item.coverImg}
                title={item.title}
                price={item.price}
                page="shop"
                type="classic"
                id={item.id}
                addToCart={() => {
                    setCart([...cart, item])
                    addToCart(item)
                }}
            />
        )
    })

    const specialCards = specials.map(item => {
        return (
            <FlavourCard
                src={item.coverImg}
                title={item.title}
                price={item.price}
                page="shop"
                type="special"
                id={item.id}
                addToCart={() => {
                    setCart([...cart, item])
                    addToCart(item)
                }}
            />
        )
    })

    return (
        <div className='ShopHeroContainer'>
            <div className='shopHeader'>
                <h1>SHOP</h1>
                <h5>ORDER OUR FRESH COTTON CANDY FLUFFED INTO 24 OZ TUBS OR TRY OUR MINIS TO SHARE!</h5>
            </div>
            <div className='classic'>
                 <h1 className='shopHead'>CLASSIC</h1>
                 <div className='classic-items'>
                    {classicCards}
                 </div>
             </div>
             <div className='Specialty'>
                 <h1 className='shopHead'>SPECIALTY</h1>
                 <div className='special-items'>
                    {specialCards}
                 </div>
             </div>
        </div>
    )
}

export default ShopHero