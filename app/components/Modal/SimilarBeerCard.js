import React from 'react';
import styled from 'styled-components';

import BeerImage from '../BeerImage';
import Colors from '../../consts/colors';

const SimilarBeerCard = ({ imgSrc, name }) => (
  <SimilarBeerCardContainer>
    <BeerImage imgSrc={imgSrc} size="small" />
    {name}
  </SimilarBeerCardContainer>
);

export default SimilarBeerCard;

const SimilarBeerCardContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 3px ${Colors.lightGray};
  margin: 0 15px;
`;
