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
                            <CustomButton><p>BACK TO LOCATIONS</p></CustomButton>
                        </Link>
                    </div>
                    <div className="location-chosen">
                        <h2>SAMBÔ {location.state.title.toUpperCase()} BOOKING</h2>
                    </div>
                </div>
            <TableAgent location={location.state.title} />
            </div>
        </>
    )
}

export default BookingView;