import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import Logo from '../../assets/images/sambo-logo.png'

function Header() {
      const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
    <div className="header active">        

        <div className='logo-container' to='/sambo'>
            <Link className='logo-link' to='/sambo'>
                <img className="sambo-logo" src={Logo}/>
            </Link>
        </div>

        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <div className="options">
            <ul className={click ? 'header-menu active' : 'header-menu'}>
                <li className='header-item active'>
                    <Link className="option" id='aboutus' to='/aboutus' onClick={closeMobileMenu} >
                        OUR STORY
                    </Link>
                </li>

                <div className='option' id='spacer'>
                    <div className="option-spacer-line"></div>
                </div>

                <li className='header-item active'>
                    <Link className="option" to='/sambo' onClick={closeMobileMenu} >
                        HOME
                    </Link>
                </li>

                <li className='header-item active'>
                    <Link className="option" to='/menu-location' onClick={closeMobileMenu} >
                        MENU
                    </Link>
                </li>
                
                <li className='header-item active'>
                    <Link className="option" to='/booking-location' onClick={closeMobileMenu} >
                        BOOKING
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )    

}



export default Header;