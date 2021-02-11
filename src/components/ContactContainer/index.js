import React from 'react'
import './ContactContainer.css';

function ContactContainer() {
    return (
        <div className="container contact-form">
            <h1>Contact</h1>
            <hr></hr>

            <div className="row">
                <div className="col-md-6">
                    <p>John Robinson</p>
                    <address>Salt Lake City, Utah</address>
                    <p>Email: johnarobinson133@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer
