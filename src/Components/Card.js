import React from "react";
import './Card.css'

const Card = ({ name, date, time, numOfGuests, id }) => {

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of Guests: {numOfGuests}</p>
            <button className="button">Cancel</button>
        </div>
    )
}

export default Card;