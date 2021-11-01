import React from 'react'
import './menupage.styles.scss'

import Location from '../../components/location/location.component';

const MenuPage = () => (
    <div className="menupage">
        <div className="menupage-text">
            <h1 style={{fontSize:'24px', color: 'var(--textWhite)', fontFamily:'Courgette, Arial, cursive'}}>Select your favourite location</h1>
        </div>
        <Location service='menu' destino='menu' />
        <div className="menupage-concept">
            <p>At SAMBÔ RODIZIO your experience begins with a visit to our gourmet salad bar that features, fresh cut vegetables, gourmet salads, snacks, continental choices of cheese and hot dishes. <br /><br />

            Once you are ready for the meats, just turn your card green side up and the chefs will bring out the sizzling skewers of meat stright from the grill one by one, turn the red side up to indicate you need a break. <br /><br />
            Use the card to control the service to your own pace, and enjoy the unique RODIZIO CONCEPT
            </p>
        </div>
    </div>
)

export default MenuPage;