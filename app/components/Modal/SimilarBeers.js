import React from 'react';
import styled from 'styled-components';

import getSimilarBeerCards from '../../helpers/getSimilarBeerCards';
import SimilarBeerCard from './SimilarBeerCard';

const SimilarBeers = ({ similarBeers }) => (
  <SimilarBeersSection>
    <Heading>You might also like:</Heading>
    <BeersContainer>{getSimilarBeerCards(similarBeers)}</BeersContainer>
  </SimilarBeersSection>
);

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
