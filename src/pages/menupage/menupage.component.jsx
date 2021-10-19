import React from 'react'
import './menupage.styles.scss'

import Location from '../../components/location/location.component';

const MenuPage = () => (
    <div className="menupage">
        <h1 style={{fontSize:'24px'}}>Select your favourite location</h1>
        <Location />
    </div>
)

export default MenuPage;