import React from 'react';

import SimilarBeerCard from '../components/Modal/SimilarBeerCard';

const getSimilarBeerCards = similarBeers =>
  similarBeers.map(beer => {
    const name = beer.name.replace(/ *\([^)]*\) */g, '');

    return (
      <SimilarBeerCard imgSrc={beer.image_url} key={beer.id} name={name} />
    );
  });

export default getSimilarBeerCards;
