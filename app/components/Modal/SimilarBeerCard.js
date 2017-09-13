import React from 'react';
import styled from 'styled-components';

import BeerImage from '../BeerImage';
import Colors from '../../consts/colors';
import formatString from '../../helpers/formatString';

const SimilarBeerCard = ({ imgSrc, name }) => (
  <SimilarBeerCardContainer>
    <BeerImage imgSrc={imgSrc} size="small" />
    {formatString(name)}
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

  @media screen and (max-width: 515px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 515px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 445px) {
    width: 90px;
    height: 90px;
    font-size: 0.6rem;
  }
`;
