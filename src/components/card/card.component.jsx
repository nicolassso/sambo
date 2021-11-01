import React from 'react'
import './card.styles.scss'

function Card({title, image, description}){
  return(
    <div className="card__content">

      <div className="card__front">
        {/* <img className='card__background' src={image} alt="" /> */}

        <h4 className="card__title">{title.toUpperCase()}</h4>

      </div>

      <div className="card__back">
        <div className="card__text">{description}</div>
      </div>

    </div>)
}


export default Card;