import React from 'react';
import styled from 'styled-components';

import Loader from './Loader';

const Modal = ({
  abv,
  brewerTips,
  description,
  ibu,
  imgSrc,
  isLoading,
  name,
  tagline
}) => (
  <ModalContainer>
    {!isLoading && <ModalCard>{description}</ModalCard>}
    {isLoading && <Loader initial />}
  </ModalContainer>
);

export default Modal;

const ModalCard = styled.div`
  width: 70%;
  height: 80%;
  background-color: #ffffff;
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
`;
