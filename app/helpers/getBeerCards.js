import React from 'react';

import Card from '../components/BeerList/Card';

const getBeerCards = beers =>
  beers.map(beer => (
    <Card
      beerId={beer.id}
      tagline={beer.tagline}
      name={beer.name}
      imgSrc={beer.image_url}
      key={beer.id}
    />
  ));

export default getBeerCards;
