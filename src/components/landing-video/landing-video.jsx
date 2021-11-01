import React from 'react'
import './landing-video.styles.scss'
import SoloFogo from '../../assets/videos/solo-fogo-a.mp4'
import Sambo from '../../assets/images/sambo-rodizio-grill.png'

const LandingVideo = () => (
    <div className="landing-video">
        <div className="video-wrapper">
            <video
                className="solo-fogo-video"
                autoPlay
                loop
                playsinline
                muted>
                <source src={SoloFogo} type="video/mp4" />
            </video>
        </div>
        <div className="sambo-grill-container">
            <img className="sambo-grill" src={Sambo} />
        </div>
        <div className="blank-div"></div>
    </div>
)

export default LandingVideo;