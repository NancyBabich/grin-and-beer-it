import React from 'react';
import styled from 'styled-components';

import SimilarBeerCard from './SimilarBeerCard';

const SimilarBeers = ({ similarBeers }) => {
  const beers = similarBeers.map(beer => (
    <SimilarBeerCard imgSrc={beer.image_url} key={beer.id} name={beer.name} />
  ));

  return (
    <SimilarBeersSection>
      <Heading>You might also like:</Heading>
      <BeersContainer>{beers}</BeersContainer>
    </SimilarBeersSection>
  );
};

export default SimilarBeers;

const BeersContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const Heading = styled.div`font-weight: 700;`;

const SimilarBeersSection = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
