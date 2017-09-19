import React from 'react';

import Card from '../components/BeerList/Card';

const getBeerCards = (beers, sortByName) => {
  const beersToDisplay = sortByName
    ? beers.sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      })
    : beers;

  return beersToDisplay.map(beer => (
    <Card
      beerId={beer.id}
      tagline={beer.tagline}
      name={beer.name}
      imgSrc={beer.image_url}
      key={beer.id}
    />
  ));
};

export default getBeerCards;
