import React, {useState,useEffect,useRef} from 'react'
import '../App.css'
import './HeroSection.css'
import HomeHero from '../images/home-hero2.PNG'
import HomeHeroVid from '../images/home-hero.MP4'

function HeroSection() {
    const videoRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth <= 999)
    }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
          window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (isMobile) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }, [isMobile])

    return (
        <div className='hero-container'>
            <video autoPlay muted={true} loop={true} src={HomeHeroVid} ref={videoRef}/>
            <img src={HomeHero} className='ChiHome' alt="Hero Image" />
        </div>
    )
}

export default HeroSection