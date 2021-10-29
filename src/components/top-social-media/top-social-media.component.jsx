import React from 'react'

import './top-social-media.styles.scss'

const TopSocialMedia = () => (
    <div className="top-social-media-wrapper">
        <div className="social-media-logos">
            <div className="tripadvisor-logo"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/sambo.rodizio/"></a></div>
            <div className="instagram-logo"><a target='_blank' rel="noreferrer" href="https://www.instagram.com/sambo.rodizio/"><i class="fab fa-instagram"></i></a></div>
            <div className="facebook-logo"><a target='_blank' rel="noreferrer" href="https://www.facebook.com/SamboRodizio/"><i class="fab fa-facebook"></i></a></div>
            <div className="tripadvisor-logo"></div>
        </div>
    </div>
)

export default TopSocialMedia;