import React from 'react'
import './homepage.styles.scss'

import LandingVideo from '../../components/landing-video/landing-video';
import CardList from '../../components/card-list/card-list.component';


const HomePage = () => (
    <div className="homepage">
        <LandingVideo/>
        <CardList />
    </div>
)

export default HomePage;