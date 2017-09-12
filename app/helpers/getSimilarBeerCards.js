import React from 'react';

import SimilarBeerCard from '../components/Modal/SimilarBeerCard';

const getSimilarBeerCards = similarBeers =>
  similarBeers.map(beer => (
    <SimilarBeerCard imgSrc={beer.image_url} key={beer.id} name={beer.name} />
  ));

export default getSimilarBeerCards;
