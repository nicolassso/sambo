import React from 'react';

import Card from '../card/card.component';
import CARD_DATA from './card-data';

import './card-list.styles.scss';

const cards = CARD_DATA;

function CardList() {
  return (
  <div className='container d-flex justify-content-center align-items-center'>
    <div className="row">
      {
        cards.map(card => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} description={card.description} image={card.image} />
          </div>)
        )
      }
    </div>
  </div>)
}


export default CardList;