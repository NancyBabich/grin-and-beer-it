import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import Loader from '../Loader';
import ModalCard from './ModalCard';

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
      <ModalCard
        abv={abv}
        brewersTips={brewersTips}
        description={description}
        ebc={ebc}
        ibu={ibu}
        imgSrc={imgSrc}
        isError={isError}
        name={name}
        similarBeers={similarBeers}
        tagline={tagline}
      />
    )}
    {isAnyLoading && <Loader initial />}
  </ModalContainer>
);

export default Modal;

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
