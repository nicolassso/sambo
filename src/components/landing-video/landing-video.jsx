import React from 'react'
import './landing-video.styles.scss'
import SoloFogo from '../../assets/videos/solo-fogo.mp4'
import Sambo from '../../assets/images/sambo-rodizio-grill.png'

const LandingVideo = () => (
    <div className="landing-video">
        <video
            className="solo-fogo-video"
            autoPlay
            loop
            muted>
            <source src={SoloFogo} type="video/mp4" />
        </video>
        
        <img className="sambo-grill" src={Sambo} />
        <div className="blank-div"></div>
    </div>
)

export default LandingVideo;