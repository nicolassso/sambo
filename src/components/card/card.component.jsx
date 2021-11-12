import React from 'react'
import './card.styles.scss'

function Card({title, image, description}){  
  return(
    <div className="cards-content">

      <div className="cards-background" 
        style={{
        backgroundImage: `url(${image})`
        }}
        ></div>
      <div className="cards-text">
        <span>{title.toUpperCase()}</span>
      </div>

    </div>)
}


export default Card;