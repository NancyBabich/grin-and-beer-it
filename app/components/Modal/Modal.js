import React from 'react';
import styled from 'styled-components';

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
  name,
  similarBeers,
  tagline
}) => (
  <ModalContainer>
    {!isAnyLoading && (
      <ModalCard>
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

const ModalCard = styled.div`
  width: 40%;
  padding: 20px;
  background-color: ${Colors.white};
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
