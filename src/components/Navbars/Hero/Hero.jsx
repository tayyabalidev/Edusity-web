import React from 'react'
import './Hero.css'
import dark_arrow from '../../../edusity_assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero'>
        <h1 className='hero-title'>We Ensure better education <br /> for a better world</h1>
        <p className='hero-text'>
        Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br /> experiences needed to excel in the dynamic field of education
        </p>
        <button className='cta2'>Explore more <img src={dark_arrow } alt="" /></button>
    </div>
  )
}

export default Hero;
