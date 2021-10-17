import React from 'react'
import './location-card.styles.scss'

function LocationCard({title, image}){
    return(
        <>
  
          <img className={`${title}-img`} src={image} alt={title}/>
  
          <h4 className="title-location">{title.toUpperCase()}</h4>
        </>
)
  }
  
  
  export default LocationCard;