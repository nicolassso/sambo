import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import Logo from '../../assets/images/sambo-logo.png'

const Header = () => (

    <div className="header">
        <Link className='logo-container' to='/'>
            <img className="sambo-logo" src={Logo} />
        </Link>
        <div className="options">
            <Link className="option" to='/' >
                HOME
            </Link>
            <Link className="option" to='/menu' >
                MENU
            </Link>
            <Link className="option" to='/booking' >
                BOOKING
            </Link>
        </div>
    </div>

);



export default Header;