import React from 'react';
import styled from 'styled-components';

import getSimilarBeerCards from '../../helpers/getSimilarBeerCards';

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
  margin-top: 1.25rem;
`;

const Heading = styled.div`
  font-weight: 700;

  @media screen and (max-width: 850px) {
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 730px) {
    margin-top: 2.25rem;
    font-size: 1rem;
  }
`;

const SimilarBeersSection = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
