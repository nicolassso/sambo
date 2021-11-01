import React from 'react'
import './bookingpage.styles.scss'

import Location from '../../components/location/location.component';

const BookingPage = () => (
    <div className="bookingpage">
        <div className="booking-text">
            <h1 style={{fontSize:'24px', color: '#c5c5c5', fontFamily:'Courgette, Arial, cursive'}}>Select your favourite location</h1>
        </div>
        <Location service='booking' destino='booking'/>
    </div>
)

export default BookingPage;