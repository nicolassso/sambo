import React from 'react'
import './pop-up.styles.scss'
import popUpImg from '../../assets/images/FACEBOOK_CHRISTMAS.png'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><p>x</p></button>
                {props.children}
                <img className='popup-image' src={popUpImg} alt="" />
            </div>
        </div>
    ) : "";
}

export default PopUp;