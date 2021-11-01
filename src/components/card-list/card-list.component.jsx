import React from 'react';

import Card from '../card/card.component';
import CARD_DATA from './card-data';

import './card-list.styles.scss';

const cards = CARD_DATA;

function CardList() {
  return (
  <div className='cardlist-container'>
    <div className="row">
      {
        cards.map(card => (
          <div className={`${card.title.toLowerCase()}-wrapper`}>
            <div className={`card card${card.id}`} key={card.id} >
              <Card title={card.title} description={card.description} image={card.image} />
            </div>
          </div>)
        )
      }
    </div>
  </div>)
}


export default CardList;