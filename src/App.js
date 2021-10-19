import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menupage/menupage.component';
import BookingPage from './pages/bookingpage/bookingpage.component';
import AboutUs from './pages/about-us/about-us.component';
import Menu from './pages/menupage/menu.component'

import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/sambo' component={HomePage} />
          <Route path='/menu-location' component={MenuPage} />
          <Route path='/booking' component={BookingPage} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/menu' component={Menu} />

        </Switch>
        <Footer />
      </div>
  );
}

export default App;
