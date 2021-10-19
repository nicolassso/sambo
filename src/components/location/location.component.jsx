import React from 'react'
import './location.styles.scss'

import LocationCard from './location-card.component';
import LOCATION_DATA from './location-data';


const locations = LOCATION_DATA;


function Location() {

    return(
    <div className="location">
        {
        locations.map(location => (
          <div className={`${location.title}-location`} key={location.id} >
            <LocationCard 
            title={location.title} 
            image={location.image} 
            />
          </div>)
        )
      }
    </div>)
}

export default Location;
