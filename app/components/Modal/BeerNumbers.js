import React from 'react';
import styled from 'styled-components';

import getBeerNumbers from '../../helpers/getBeerNumbers';

const BeerNumbers = ({ beerData }) => (
  <BeerNumbersContainer>{getBeerNumbers(beerData)}</BeerNumbersContainer>
);

export default BeerNumbers;

const BeerNumbersContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
