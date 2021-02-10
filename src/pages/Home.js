import React from 'react'
import '../App.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSeaction';
import Tools from '../components/Tools';

function Home () {
    return (
        <>
        <HeroSection />
        <Tools />
        <Footer />
        </>
    )
}

export default Home;