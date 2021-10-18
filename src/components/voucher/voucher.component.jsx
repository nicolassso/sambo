import React from 'react'
import './voucher.styles.scss'

import {withRouter} from 'react-router-dom'

import voucherimg from '../../assets/images/gift_card.png'
import CustomButton from '../custom-button/custom-button.component'



const Voucher = ({history}) => {

    return (

    <div className="voucher">
        <div className="image-wrapper">
            <img className='voucher-img' src={voucherimg} alt="" />
        </div>

        <div className="voucher-text">
            <span className='voucher-span'>SHARE A CHURRASCO ART EXPERIENCE <br /> WITH OUR GIFT CARD</span>

        </div>

        <div className="voucher-button">
            <CustomButton
                onClick={() => {
                history.push('/aboutus');    
                }}>
                Leer más
            </CustomButton>
        </div>        

    </div>
    )
}

export default withRouter(Voucher);