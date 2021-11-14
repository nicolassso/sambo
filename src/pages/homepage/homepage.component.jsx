import React from 'react'
import './homepage.styles.scss'

import LandingVideo from '../../components/landing-video/landing-video';
import CardList from '../../components/card-list/card-list.component';
import Voucher from '../../components/voucher/voucher.component';
import TripAdvisor from '../../components/trip-advisor/trip-advisor.component';
import RodizioConcept from '../../components/rodizio-concept/rodizio-concept.components';

const HomePage = () => (
    <div className="homepage">
        <LandingVideo />
        <CardList />
        <Voucher />
        <RodizioConcept />
        {/* <TripAdvisor /> */}

    </div>
)

export default HomePage;