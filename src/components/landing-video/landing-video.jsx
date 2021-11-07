import React from 'react'
import './landing-video.styles.scss'
import SoloFogo from '../../assets/videos/solo-fogo-a.mp4'
import Sambo from '../../assets/images/sambo-rodizio-grill.png'

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
                        playsinline
                        muted>
                        <source src={SoloFogo} type="video/mp4" />
                    </video>
                : console.log('success')
                }
                
            </div>
            <div className="sambo-grill-container">
                <img className="sambo-grill" src={Sambo} />
            </div>
            <div className="blank-div"></div>
        </div>
    )
}

export default LandingVideo;