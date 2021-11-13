import React from 'react'
import './landing-video.styles.scss'
import SoloFogo from '../../assets/videos/solo-fogo-a.mp4'
import Sambo from '../../assets/images/sambo-rodizio-grill.png'
import CustomButton from '../custom-button/custom-button.component'

import { Link } from 'react-router-dom'

function LandingVideo(){
    const widthWindow = window.innerWidth;
    return(
        <div className="landing-video">
            <div className="video-wrapper">
                {widthWindow > 500 ? 
                    <video
                        className="solo-fogo-video"
                        autoPlay
                        loop
                        playsInline
                        muted>
                        <source src={SoloFogo} type="video/mp4" />
                    </video>
                : console.log('success')
                }
                
            </div>
            <div className="sambo-grill-container">
                <img className="sambo-grill" src={Sambo} />
            </div>
            <div className="landing-button">
                <Link to='/booking-location'>
                    <CustomButton>BOOKING</CustomButton>
                </Link>
            </div>
        </div>
    )
}

export default LandingVideo;