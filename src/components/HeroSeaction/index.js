import React from 'react'
import '../../App.css'
import AboutMeContainer from '../AboutMeContainer';
import { Button } from '../Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <AboutMeContainer />
        </div>
    )
}

export default HeroSection
