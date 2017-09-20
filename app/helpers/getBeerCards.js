import React from 'react';

import Card from '../components/BeerList/Card';
import sortBeers from './sortBeers';

const getBeerCards = (beers, sortingCategory, sortingOrder) =>
  sortBeers(beers, sortingCategory, sortingOrder).map(beer => (
    <Card
      beerId={beer.id}
      tagline={beer.tagline}
      name={beer.name}
      imgSrc={beer.image_url}
      key={beer.id}
    />
  ));

export default getBeerCards;
