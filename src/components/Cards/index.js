import React from 'react'
import CardItem from '../CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my Projects.</h1>
             <div className="cards__wrapper">
                 <ul className="cards__items">
                     <CardItem 
                     src="images/reserveARoom.PNG"
                     text="A website that allows the user to reserve a room or a venue to host an event."
                     label="Reserve a Room"
                     path='https://reserve-a-room.herokuapp.com/'
                     />
                     <CardItem 
                     src="images/ECommerceBackEnd.PNG"
                     text="This application is a ORM for a E-Commerce Back End. It helps with GET, POST, PUT, and DEL commands to the database."
                     label="E-Commerce Back End (ORM)"
                     path='https://github.com/jrobi133/John-Robinson-E-Commerce-Back-End'
                     />
                     <CardItem 
                     src="images/employeeTracker.PNG"
                     text="This application is a content management system to help users keep track of employee’s roles and departments in the workplace."
                     label="Employee Tracker"
                     path='https://github.com/jrobi133/John-Robinson-Employee-Tracker'
                     />
                     <CardItem 
                     src="images/noteTaker.PNG"
                     text="This is an application that can be used to write, save, and delete notes."
                     label="Note Taker"
                     path='https://pacific-plains-75638.herokuapp.com/notes'
                     />
                     <CardItem 
                     src="images/newnewCapture.JPG"
                     text="This is a trivia game using two API’s. One API is pulling in the questions and the other API is pulling in a random comment positive or negative based off if u get the questing right or wrong."
                     label="Big Brain Trivia"
                     path='https://heavensregent.github.io/project1/'
                     />
                 </ul>
             </div>
        </div>
    )
}

export default Cards
