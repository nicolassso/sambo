import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import TopSocialMedia from './components/top-social-media/top-social-media.component';
import Footer from './components/footer/footer.component';

import { ScrollService } from './services/scrollService.component';

import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menupage/menupage.component';
import BookingPage from './pages/bookingpage/bookingpage.component';
import AboutUs from './pages/about-us/about-us.component';
import VoucherPage from './pages/voucherpage/voucherpage.component';
import MenuView from './pages/menupage/menu-view.component';
import BookingView from './pages/bookingpage/booking-view.component';


import './App.scss';

function App() {
  return (
    <div>
        {/* <TopSocialMedia /> */}
        <Header/>
        <ScrollService>
        <Switch>
          <Route exact path='/sambo' component={HomePage} />
          <Route path='/menu-location' component={MenuPage} />
          <Route path='/booking-location' component={BookingPage} />
          <Route path='/aboutus' component={AboutUs} />          
          <Route path='/voucher' component={VoucherPage} />          
          <Route path='/booking' component={BookingView} />
          <Route path='/menu' component={MenuView} />
        </Switch>
        </ScrollService>
        <Footer />
      </div>
  );
}

export default App;
