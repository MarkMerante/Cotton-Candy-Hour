import React from 'react'
import '../../App.css'
import NavHero2 from '../NavHero2'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import HeroImages from '../HeroImages'

function Home() {
    return (
        <>
            <NavHero2 />
            <HeroSection />
            <Cards />
            <HeroImages />
        </>
    )
}

export default Home