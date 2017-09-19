import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import BeerDetails from './BeerDetails';
import BeerImage from '../BeerImage';
import Colors from '../../consts/colors';
import SimilarBeers from './SimilarBeers';

const ModalCard = ({
  abv,
  brewersTips,
  description,
  ebc,
  ibu,
  imgSrc,
  isError,
  name,
  similarBeers,
  tagline
}) => (
  <CardContainer isError={isError}>
    {!isError ? (
      <InnerContainer>
        <BeerInfo>
          <BeerImage size="big" imgSrc={imgSrc} padding />
          <BeerDetails
            abv={abv}
            brewersTips={brewersTips}
            description={description}
            ebc={ebc}
            ibu={ibu}
            name={name}
            tagline={tagline}
          />
        </BeerInfo>
        <SimilarBeers similarBeers={similarBeers} />
      </InnerContainer>
    ) : (
      <InnerContainer>
        <ErrorMessage>We're sorry, but something went wrong :(</ErrorMessage>
      </InnerContainer>
    )}
  </CardContainer>
);

export default ModalCard;

const BeerInfo = styled.div`
  display: flex;
  width: 100%;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 10rem;
  padding: 0 1rem;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: relative;
  font-size: 0.75rem;
`;

const CardContainer = styled.div`
  width: ${ifProp('isError', '100%', '60%')};
  height: ${ifProp('isError', '100%', '90%')};
  margin-top: ${ifProp('isError', '0', '30px')};
  padding: ${ifProp('isError', '0 0 0 0', '45px 20px 20px 20px')};
  background-color: ${ifProp(
    'isError',
    `${Colors.themeColor}`,
    `${Colors.white}`
  )};

  @media screen and (max-width: 850px) {
    width: ${ifProp('isError', '100%', '70%')};
  }

  @media screen and (max-width: 730px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
`;
