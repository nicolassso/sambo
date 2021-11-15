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
        <div className="voucher-text">
            <h2>SAMBÔ GIFT VOUCHER</h2>
            <p>Welcome to Sambô gift voucher page.</p>

        </div>
        <div className="image-wrapper">
            <img className='voucher-img' src={voucherimg} alt="" />
        </div>

        
        <div className="voucher-iframe-sambo">
        <iframe src="https://cdn.giftup.app/dist/checkout.html?site=0a236ea1-8280-48c7-81ac-47bf567c4680&amp;environment=Production&amp;instance=x6z6zfoa87d" frameBorder="0" width="100%" height="633px" id="gift-up-iframe" name="x6z6zfoa87d" allowpaymentrequest="" data-gift-up-height="524px"></iframe>        </div>  

    </div>
    )
}

export default Voucher;