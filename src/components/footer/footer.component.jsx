import React from 'react'
import './footer.styles.scss'

import CustomButton from '../custom-button/custom-button.component'


const Footer = () => (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-top-left-content">
                    <div className="top-left-content-box-title">
                        <h2>COME ON IN!</h2>
                    </div>
                    <div className="top-left-content-box-title-opening">
                        <h4>OPENING</h4>
                    </div>
                    <div className="top-left-content-box-time">
                        <h5>DINNER</h5>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>Monday | Thursday | Friday | Saturday | Sunday : 17:00 – 22:00</p>
                    </div>
                    <div className="top-left-content-box-time">
                        <h5>LUNCH</h5>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>Saturday | Sunday: 12:00 – 15:00</p>
                    </div>
                    <div className="top-left-content-box-title-closing">
                        <h4>CLOSING DAYS</h4>
                    </div>
                    <div className="top-left-content-box-days">
                        <p>Tuesday | Wednesday : Closed days</p>
                    </div>
                    <div className="top-left-content-box-button">
                        {/* <CustomButton>Booking</CustomButton> */}
                    </div>
                </div>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-content">
                    <div className="top-right-content-box-title">
                        <h2>CONTACT</h2>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>PHONE</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a>+44 1305 457870</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>EMAIL</h4>
                    </div>
                    <div className="top-right-content-box-contact">
                        <a>info@samborodizio.co.uk</a>
                    </div>
                    <div className="top-right-content-box-title-2">
                        <h4>ADDRESS</h4>
                    </div>
                    <div className="top-right-content-box-contact-addresses">
                        <div className="footer-box-contact-left">
                            <p id='weymouth'>41 Abbotsbury Rd, <br />
                            Weymouth DT4 0AQ, <br />
                            United Kingdom</p>
                        </div>
                        <div className="footer-box-contact-right">
                            <p id='poole'>Unit 26, Dolphin Quays <br />
                            The Quay, <br />
                            Poole BH15 1HU, <br />
                            United Kingdom</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Sambô rodizio bar and grill – Copyright 2021</p>
        </div>
    </div>
)

export default Footer;