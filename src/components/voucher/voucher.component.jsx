import React from 'react'
import './voucher.styles.scss'

import voucherimg from '../../assets/images/gift_card.png'

const Voucher = () => (
    <div className="voucher">
        <img className='voucher-img' src={voucherimg} alt="" />
        <span>SHARE A CHURRASCO ART EXPERIENCE <br /> WITH OUR GIFT CARD</span>
    </div>
)

export default Voucher;