import React from 'react';
import styled from 'styled-components';

const SimilarBeers = ({ similarBeers }) => {
  const beers = similarBeers.map(beer => <div key={beer.id}>{beer.id}</div>);

  return <SimilarBeersContainer>{beers}</SimilarBeersContainer>;
};

export default SimilarBeers;

const SimilarBeersContainer = styled.div`
  width: 100%;
  border: solid 1px yellow;
`;
