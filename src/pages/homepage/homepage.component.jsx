import React from 'react'
import './homepage.styles.scss'

import LandingVideo from '../../components/landing-video/landing-video';
import CardList from '../../components/card-list/card-list.component';
import Voucher from '../../components/voucher/voucher.component'


const HomePage = () => (
    <div className="homepage">
        <LandingVideo />
        <CardList />
        <Voucher />
    </div>
)

export default HomePage;