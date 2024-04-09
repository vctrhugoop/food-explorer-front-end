import React from 'react';

import { CardContainer } from './styles';

export function Card({ dishes }) {
  return (
    <CardContainer>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <img src={dish.imageURL} />
          <p>{dish.name}</p>
          <p>{dish.description}</p>
          <p>{dish.price}</p>
        </div>
      ))}
    </CardContainer>
  );
}
