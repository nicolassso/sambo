import React from 'react'
import './landing-video.styles.scss'
import SoloFogo from '../../assets/videos/FOGO720.mov'
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
        <div className="sambo-grill-container">
            <img className="sambo-grill" src={Sambo} />
        </div>
        <div className="blank-div"></div>
    </div>
)

export default LandingVideo;