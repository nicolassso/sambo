import React from 'react'
import './card.styles.scss'

function Card({title, image, description}){
  return(
    <div className="card text-center bg-dark rounded-0">
      <img src={image} alt="" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {/* DESCRIPTION SHOULD SHOW WHEN HOVER */}
        {/* <p className="card-text">{description}</p> */}
      </div>
    </div>)
}


export default Card;