import React from 'react'
import '../App.css';
import ContactContainer from '../components/ContactContainer';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
        <h1 className='contact'> <ContactContainer /> </h1>;
        <Footer />
        </>
    );
}