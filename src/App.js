import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import TopSocialMedia from './components/top-social-media/top-social-media.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menupage/menupage.component';
import BookingPage from './pages/bookingpage/bookingpage.component';
import AboutUs from './pages/about-us/about-us.component';
import MenuView from './pages/menupage/menu-view.component';
import MenuPoole from './components/menu-component/menu.component-poole';
import BookingView from './pages/bookingpage/booking-view.component';


import './App.scss';

function App() {
  return (
    <div>
        <TopSocialMedia />
        <Header/>
        <Switch>
          <Route exact path='/sambo' component={HomePage} />
          <Route path='/menu-location' component={MenuPage} />
          <Route path='/booking-location' component={BookingPage} />
          <Route path='/booking' component={BookingView} />
          <Route path='/aboutus' component={AboutUs} />
          {/* location==='poole' ? <Route path='/menu-poole' component={MenuPoole}
          : <Route path='/menu' component={Menu} />
          */}
          <Route path='/menu' component={MenuView} />


        </Switch>
        <Footer />
      </div>
  );
}

export default App;
