import React from 'react'
import './menupage.styles.scss'

import Location from '../../components/location/location.component';

const MenuPage = () => (
    <div className="menupage">
        <div className="menupage-text">
            <h1 style={{fontSize:'24px', color: '#c5c5c5'}}>Select your favourite location</h1>
        </div>
        <Location service='menu' destino='menu' />
    </div>
)

export default MenuPage;