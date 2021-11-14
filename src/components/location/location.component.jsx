import React from 'react'
import './location.styles.scss'
import { Link } from 'react-router-dom'



import LocationCard from './location-card.component';
import LOCATION_DATA from './location-data';
import CustomButton from '../custom-button/custom-button.component'


const locations = LOCATION_DATA;


function Location({service, destino}) {

    return(
    <div className="location">
        {
        locations.map(location => (
          <>
          <div className={`${location.title}-location`} key={location.id} >
            <LocationCard 
            title={location.title} 
            image={location.image} 
            />
            <div className="go-to-menu-btn">
              <Link
                  to={{
                    pathname: `/${destino}`,
                    state: {
                      title: location.title
                    }
                    }}>
                <CustomButton> 
                   <p>GO TO {location.title} {service}</p>
                </CustomButton>
              </Link>

            </div> 
          </div>
          
          </>
          )
        )
      }
    </div>
    )
}
export default Location;
