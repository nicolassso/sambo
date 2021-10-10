import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MenuPage from './pages/menupage/menupage.component';
import BookingPage from './pages/bookingpage/bookingpage.component';

import './App.css';

function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/menu' component={MenuPage} />
          <Route path='/booking' component={BookingPage} />
        </Switch>
      </div>
  );
}

export default App;
