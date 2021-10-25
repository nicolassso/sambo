import React from 'react'
import { Link, useLocation } from "react-router-dom"

import TableAgent from '../../components/table-agent/table-agent.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import './booking-view.styles.scss'


const BookingView = () => {
    const location = useLocation();

    return(
        <>
            <div className="bookingview">
                <div className="bookingview-header">
                    <div className="location-button-back">
                        <Link to='/booking-location' >
                            <CustomButton>BACK TO LOCATIONS</CustomButton>
                        </Link>
                    </div>
                    <div className="location-chosen">
                        <h1>{location.state.title.toUpperCase()} BOOKING</h1>
                    </div>
                </div>
            <TableAgent />
            </div>
        </>
    )
}

export default BookingView;