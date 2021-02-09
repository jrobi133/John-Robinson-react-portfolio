import React from 'react'
import CardItem from '../CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>check out these destinations.</h1>
             <div className="cards__wrapper">
                 <ul className="cards__items">
                     <CardItem 
                     src="images/img-9.jpg"
                     text="explore the hidden waterfall deep inside the jungle"
                     label="adventure"
                     path='/portfolio'
                     />
                     <CardItem 
                     src="images/img-9.jpg"
                     text="explore the hidden waterfall deep inside the jungle"
                     label="adventure"
                     path='/portfolio'
                     />
                 </ul>
             </div>
        </div>
    )
}

export default Cards
