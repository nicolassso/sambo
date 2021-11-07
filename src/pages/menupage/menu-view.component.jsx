import React from 'react'
import { Link, useLocation } from "react-router-dom"
import useEffect from 'react';

import Menu from '../../components/menu-component/menu.component';
import MenuPoole from '../../components/menu-component/menu.component-poole'
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
                        <h1>{location.state.title.toUpperCase()}</h1>
                    </div>
                </div>
            {
                location.state.title==='weymouth' ? <Menu />
                : <MenuPoole />
            }

            </div>
        </>
    )
}

export default MenuView;