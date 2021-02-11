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
                     text="Reserve a Room"
                     path='https://reserve-a-room.herokuapp.com/'
                     />
                     <CardItem 
                     src="images/ECommerceBackEnd.PNG"
                     text="E-Commerce Back End (ORM)"
                     path='https://github.com/jrobi133/John-Robinson-E-Commerce-Back-End'
                     />
                     <CardItem 
                     src="images/employeeTracker.PNG"
                     text="Employee Tracker"
                     path='https://github.com/jrobi133/John-Robinson-Employee-Tracker'
                     />
                     <CardItem 
                     src="images/noteTaker.PNG"
                     text="Note Taker"
                     path='https://pacific-plains-75638.herokuapp.com/notes'
                     />
                     <CardItem 
                     src="images/newnewCapture.JPG"
                     text="Big Brain Trivia"
                     path='https://heavensregent.github.io/project1/'
                     />
                 </ul>
                 <ul className="cards__items">
                     <CardItem 
                     src="images/employeeDirectory.png"
                     text="React Employee Directory"
                     path='https://jrobi133.github.io/John-Robinson-employee-directory'
                     />
                     <CardItem 
                     src="images/budgetTracker.png"
                     text="(PWA) Budget Tracker"
                     path='https://johns-budget-tracker.herokuapp.com'
                     />
                     <CardItem 
                     src="images/workoutTracker.png"
                     text="Workout Tracker"
                     path='https://johnsworkouttracker.herokuapp.com'
                     />
                     <CardItem 
                     src="images/teamBuilderGenerator.png"
                     text="Team Builder Generator"
                     path='https://github.com/jrobi133/John-Robinson-Template-Engine-Employee-Summary'
                     />
                     <CardItem 
                     src="images/passwordGenerator.png"
                     text="Password Generator"
                     path='https://jrobi133.github.io/John-Robinson-Password-Generator/'
                     />
                 </ul>
             </div>
        </div>
    )
}

export default Cards
