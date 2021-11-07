import React from 'react'
import './location-card.styles.scss'
import {useHistory} from 'react-router-dom'

function LocationCard({title, image}){

    const history = useHistory();
    
    const handleClick = () => {
      history.push('/menu')
    }
    return(
        <div className='location-card'>
            <div className="location-img-container"
            >
        </div>
        <div className="location-title-container">  
          <h4 className="title-location">SAMBÔ {title.toUpperCase()}</h4>
        </div>
        </div>
)
  }
  
  
  export default LocationCard;