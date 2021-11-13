import React from 'react'
import './bookingpage.styles.scss'

import Location from '../../components/location/location.component';

const BookingPage = () => (
    <div className="bookingpage">
        <div className="booking-text">
            <h1>SELECT YOUR FAVOURITE LOCATION</h1>        
        </div>
        <Location service='booking' destino='booking'/>
    </div>
)

export default BookingPage;