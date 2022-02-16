import React from 'react';
import Card from './Card';


const Reservations = ({ reservations }) => {
    console.log({reservations})
    const reservationCards = reservations.map(reservation => {
        return (
            <Card 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            numOfGuests={reservation.number}
            id={reservation.id}
            key={reservation.id}
            />
        )
    })
    return (
        <div>
            {reservationCards}
        </div>
    )
}

export default Reservations;
