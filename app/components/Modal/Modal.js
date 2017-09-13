import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import BeerDetails from './BeerDetails';
import BeerImage from '../BeerImage';
import Colors from '../../consts/colors';
import Loader from '../Loader';
import SimilarBeers from './SimilarBeers';

const Modal = ({
  abv,
  brewersTips,
  description,
  ebc,
  ibu,
  imgSrc,
  isAnyLoading,
  isError,
  name,
  similarBeers,
  tagline
}) => (
  <ModalContainer>
    {!isAnyLoading && (
      <ModalCard isError={isError}>
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
            <ErrorMessage>
              We're sorry, but something went wrong :(
            </ErrorMessage>
          </InnerContainer>
        )}
      </ModalCard>
    )}
    {isAnyLoading && <Loader initial />}
  </ModalContainer>
);

export default Modal;

const BeerInfo = styled.div`
  display: flex;
  width: 100%;
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  font-weight: 700;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: relative;
`;

const ModalCard = styled.div`
  width: 50%;
  height: ${ifProp('isError', '70%', 'auto')};
  padding: 20px;
  background-color: ${ifProp(
    'isError',
    `${Colors.themeColor}`,
    `${Colors.white}`
  )};
`;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito';
  color: ${Colors.darkGray};
`;
