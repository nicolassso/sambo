import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import Logo from '../../assets/images/sambo-logo.png'

const Header = () => (

    <div className="header">
        <Link className='logo-container' to='/sambo'>
            <img className="sambo-logo" src={Logo} />
        </Link>
        <div className="options">
            <Link className="option" id='aboutus' to='/aboutus' >
                ABOUT US
            </Link>
            <p className='option' id='spacer'>______</p>
            <Link className="option" to='/sambo' >
                HOME
            </Link>
            <Link className="option" to='/menu-location' >
                MENU
            </Link>
            <Link className="option" to='/booking' >
                BOOKING
            </Link>
        </div>
    </div>

);



export default Header;