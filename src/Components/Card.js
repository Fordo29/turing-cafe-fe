import React from "react";

const Card = ({ name, date, time, numOfGuests, id }) => {

    return (
        <div>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{numOfGuests}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card;