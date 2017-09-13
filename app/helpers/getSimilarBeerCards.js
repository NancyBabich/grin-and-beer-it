import React from 'react';

import formatString from './formatString';
import SimilarBeerCard from '../components/Modal/SimilarBeerCard';

const getSimilarBeerCards = similarBeers =>
  similarBeers.map(beer => {
    const name = formatString(beer.name);

    return (
      <SimilarBeerCard imgSrc={beer.image_url} key={beer.id} name={name} />
    );
  });

export default getSimilarBeerCards;
