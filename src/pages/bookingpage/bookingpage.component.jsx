import React from 'react'
import './bookingpage.styles.scss'

import TableAgent from '../../components/table-agent/table-agent.component';

const BookingPage = () => (
    <div className="bookingpage">
        <h1 style={{marginBottom: '50px'}}>BOOKING</h1>
        <TableAgent />
    </div>
)

export default BookingPage;