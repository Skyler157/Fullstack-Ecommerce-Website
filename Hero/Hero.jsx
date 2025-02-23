import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero