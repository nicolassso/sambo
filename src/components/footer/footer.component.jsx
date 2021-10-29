import React from 'react'
import './footer.styles.scss'

import {Link} from 'react-router-dom'
import Logo from '../../assets/images/sambo-logo.png'


const Footer = () => (
    <div className="footer">
        <section className="section-left">
            <h1>CONTACT</h1>
            <h3>PHONE</h3>
            <a href='tel: +44 1305 457870'><i class="fa fa-phone "  style={{
                color: 'var(--textWhite)'
            }}></i> +44 1305 457870</a>
            <h3>EMAIL</h3>
            <a href='mailto: info@samborodizio.co.uk'><i class="far fa-envelope" style={{
                color: 'var(--textWhite)'
            }}></i> info@samborodizio.co.uk</a>
        </section>
        <section className="section-center">
        <Link className='logo-container' to='/sambo'>
            <img className="sambo-logo" src={Logo} />
        </Link>
        <p className='footer-sambo'> SAMBÔ RODIZIO BAR & GRILL® <br /> EST. 2019</p>

        </section>
        <section className="section-right">
            <h1 style={{textAlign:'center'}}>VISIT US</h1>
            <div className="section-addresses">
                <div className="footer-weymouth">
                    <div className="footer-weymouth-header"
                    style={{borderBottom:'2px solid var(--navyBlue)'}}>
                        <h3>WEYMOUTH</h3>
                    </div>
                    <div className="footer-weymouth-body">
                        <p> 41 Abbotsbury Rd <br />
                            Weymouth, Dorset  <br />
                            DT4 0AQ <br />
                            UNITED KINGDOM</p>
                    </div>
                        
                </div>
                <div className="footer-poole">
                    <div className="footer-poole-header" 
                    style={{
                            borderBottom:'2px solid var(--navyBlue)'
                        }}>
                            <h3>POOLE</h3>
                    </div>
                    <div className="footer-poole-body">
                        <p> The Quay <br />
                            Poole <br />
                            BH15 <br />
                            UNITED KINGDOM</p>
                    </div>                        
                </div>
            </div>
        </section>
    </div>
)

export default Footer;