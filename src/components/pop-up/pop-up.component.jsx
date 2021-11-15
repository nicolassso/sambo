import React from 'react'
import './pop-up.styles.scss'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><p>x</p></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default PopUp;