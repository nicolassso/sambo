import React from 'react'
import './voucher.styles.scss'


import voucherimg from '../../assets/images/gift_card.png'
import CustomButton from '../custom-button/custom-button.component'
import {useHistory} from 'react-router-dom'




const Voucher = () => {

    const history = useHistory();
    
    const handleClick = () => {
      history.push('/menu')
    }

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
                onClick={handleClick}>
                Leer más
            </CustomButton>
        </div>  

    </div>
    )
}

export default Voucher;