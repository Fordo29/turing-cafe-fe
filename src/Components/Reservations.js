import React from 'react';
import Card from './Card';
import './Reservation.css';


const Reservations = ({ reservations }) => {
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
        <div className='reservation-container'>
            {reservationCards}
        </div>
    )
}

export default Reservations;
