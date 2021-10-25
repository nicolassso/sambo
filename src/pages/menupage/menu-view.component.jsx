import React from 'react'
import { Link, useLocation } from "react-router-dom"

import Menu from '../../components/menu-component/menu.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './menu-view.styles.scss'


const MenuView = () => {
    const location = useLocation();

    return(
        <>
            <div className="menuview">
                <div className="menuview-header">
                    <div className="location-button-back">
                        <Link to='/menu-location' >
                            <CustomButton>BACK TO LOCATIONS</CustomButton>
                        </Link>
                    </div>
                    <div className="location-chosen">
                        <h1>{location.state.title.toUpperCase()} MENU</h1>
                    </div>
                </div>
            <Menu />
            </div>
        </>
    )
}

export default MenuView;