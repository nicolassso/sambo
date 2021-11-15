import React from 'react'
import { Link } from 'react-router-dom';
import './gift-card.styles.scss'

import CustomButton from '../custom-button/custom-button.component';

const GiftCard = () => (
    <div className="gift-card-sambo">
        <div className="gift-card-container">
            <div className="gift-card-content-left">
                <div className="gift-card-content-left-text">
                    <h3>SAMBÔ</h3>
                    <h3>GIFT CARDS</h3>
                    <p>Gift cards are perfect for people who love indulging in delicious food and beverages.</p>
                </div>
                <div className="gift-card-content-left-button">
                    <Link to='/voucher'>
                        <CustomButton><p>ORDER VOUCHER</p></CustomButton>
                    </Link>
                </div>
            </div>
            <div className="gift-card-content-right"></div>
        </div>
    </div>
)

export default GiftCard;