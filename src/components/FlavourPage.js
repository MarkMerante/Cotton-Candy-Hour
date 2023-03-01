import React from 'react'
import './FlavourPage.css'
import FlavourCard from './FlavourCard'
import classics from './Classics'
import specials from './Specials'
import './HeroSection.css'


function FlavourPage() {
    const classicCards = classics.map(item => {
        return (
            <FlavourCard
                src={item.coverImg}
                title={item.title}
            />
        )
    })

    const specialCards = specials.map(item => {
        return (
            <FlavourCard
                src={item.coverImg}
                title={item.title}
            />
        )
    })
    return (
        <div className='mainPage'>
            <div className='hero-container'>
                <img src='/images/CCCH Flavours.png' className='cchFlavour'/>
            </div>
            <div className='hero-container'>
            <video src='/videos/classicFlavour.MP4' className='classics-video' autoPlay={true} loop={false} muted={true} />
            </div>
            <div className='container'>
                <video src='/videos/Specialty.MP4' className='specialty-video' autoPlay={true} loop={false} muted={true} />
            </div>
        </div>
        
        // <div className="mainPage">
            
        //     <section className="menuType">
        //         <div className='classics'>
        //             <h1>Classics</h1>
        //             <p>Try our most popular classic favourites</p>
        //             <section className="cards-list">
        //                 {classicCards}
        //             </section>
        //         </div>
        //         <div className='specials'>
        //             <h1>Specials</h1>
        //             <p>How about our unique special flavors you won't find anywhere else?</p>
        //             <section className="cards-list">
        //                 {specialCards}
        //             </section>
        //         </div>
        //     </section>  
        // </div>
    )
}

export default FlavourPage