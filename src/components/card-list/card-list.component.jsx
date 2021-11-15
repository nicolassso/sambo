import React from 'react';
import {Link} from 'react-router-dom'

import Card from '../card/card.component';
import CARD_DATA from './card-data';
import CustomButton from '../../components/custom-button/custom-button.component'

import './card-list.styles.scss';

const cards = CARD_DATA;


function CardList() {
  return (
  <div className='cardlist-container'>
    <div className="cardlist-text">
      <div className="cardlist-text-header">
        <h2>SAMBÔ BRAZILIAN ROOTS <br /> CHURRASCO ART</h2>
      </div>
      <div className="cardlist-text-body">
        <p>More than tradition, Sambô Rodizio is the result of a long walk, from the south of Brazil, with its roots in the countryside of Paraná, where everything started, surrounded by all the tradition and proudness of the Brazilian Churrasco served on skewers, the RODIZIO. Originated in the zone of Pampa Southern Brazil, it quickly became a part of Brazil´s National Brand.</p>
      </div>
    </div>

    <div className="row">
      {
        cards.map(card => (          
          <div className={`${card.title.toLowerCase()}-wrapper`}>
            <div
             className={`cards card${card.id}`}
              key={card.id}
              >
              <Card
                key={card.id}
                title={card.title}
                description={card.description} 
                image={card.image}
              />
            </div>            
          </div>)
        )
      }
    </div>

    <div className="cardlist-button">
      <Link>
        <CustomButton><p>Check our menu</p></CustomButton>
      </Link>
    </div>
  </div>)
}


export default CardList;