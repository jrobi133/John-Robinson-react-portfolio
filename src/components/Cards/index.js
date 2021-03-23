import React from 'react'
import CardItem from '../CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my Projects.</h1>
            <h3>It will take a minute to load up due to using a free service for my projects, and maybe a reload</h3>
             <div className="cards__wrapper">
                 <ul className="cards__items">
                     <CardItem 
                     src="images/memoryGames.PNG"
                     text="Memory Games"
                     path='https://memory-games-project.herokuapp.com/'
                     git='https://github.com/jrobi133/memory-games'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/reserveARoom.PNG"
                     text="Reserve a Room"
                     path='https://reserve-a-room.herokuapp.com/'
                     git='https://github.com/HeavensRegent/reserve-a-room'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/employeeDirectory.png"
                     text="React Employee Directory"
                     path='https://jrobi133.github.io/John-Robinson-employee-directory'
                     git='https://github.com/jrobi133/John-Robinson-employee-directory'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/noteTaker.PNG"
                     text="Note Taker"
                     path='https://pacific-plains-75638.herokuapp.com/notes'
                     git='https://github.com/jrobi133/John-Robinson-Note-Taker'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/newnewCapture.JPG"
                     text="Big Brain Trivia"
                     path='https://heavensregent.github.io/project1/'
                     git='https://github.com/HeavensRegent/project1'
                     gitText="Github Link"
                     />
                 </ul>
                 <ul className="cards__items">
                     <CardItem 
                     src="images/budgetTracker.png"
                     text="(PWA) Budget Tracker"
                     path='https://johns-budget-tracker.herokuapp.com'
                     git='https://github.com/jrobi133/John-Robinson-Budget-Tracker'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/workoutTracker.png"
                     text="Workout Tracker"
                     path='https://johnsworkouttracker.herokuapp.com'
                     git='https://github.com/jrobi133/John-Robinson-Workout-Tracker'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/teamBuilderGenerator.png"
                     text="Team Builder Generator"
                     path='https://drive.google.com/file/d/1puWUErlrlp8EsfbdPQ9C44pD4S4bFSln/view'
                     git='https://github.com/jrobi133/John-Robinson-Template-Engine-Employee-Summary'
                     gitText="Github Link"
                     />
                    <CardItem 
                     src="images/ECommerceBackEnd.PNG"
                     text="E-Commerce Back End (ORM)"
                     path='https://drive.google.com/file/d/1yfJqSfcecFvblaziaoojUFxGtVNUZCw7/view'
                     git='https://github.com/jrobi133/John-Robinson-E-Commerce-Back-End'
                     gitText="Github Link"
                     />
                     <CardItem 
                     src="images/employeeTracker.PNG"
                     text="Employee Tracker"
                     path='https://drive.google.com/file/d/1ioKPrztjHSK0aKue-pwttopb0AWihTgK/view'
                     git='https://github.com/jrobi133/John-Robinson-Employee-Tracker'
                     gitText="Github Link"
                     />
                 </ul>
             </div>
        </div>
    )
}

export default Cards
