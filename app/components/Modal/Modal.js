import React from 'react';
import styled from 'styled-components';

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
        <Body>
          <ImageContainer>
            <Image src={imgSrc} />
          </ImageContainer>
          <InfoContainer>
            <Name>{name}</Name>
            <Tagline>{tagline}</Tagline>
            <Data>
              <DataBit>
                <DataType>ibu:</DataType>
                <Number>{ibu}</Number>
              </DataBit>
              <DataBit>
                <DataType>abv:</DataType>
                <Number>{abv}</Number>
              </DataBit>
              <DataBit>
                <DataType>ebc:</DataType>
                <Number>{ebc}</Number>
              </DataBit>
            </Data>
            <Description>{description}</Description>
            <BrewersTips>{brewersTips}</BrewersTips>
          </InfoContainer>
        </Body>
        <SimilarBeers similarBeers={similarBeers} />
      </ModalCard>
    )}
    {isAnyLoading && <Loader initial />}
  </ModalContainer>
);

export default Modal;

const Body = styled.div`
  display: flex;
  width: 100%;
  border: solid 1px yellow;
`;

const BrewersTips = styled.div``;

const Data = styled.div`display: flex;`;

const DataBit = styled.div``;

const DataType = styled.span`text-transform: uppercase;`;

const Description = styled.div``;

const Image = styled.img`
  height: 300px;
  width: auto;
`;

const ImageContainer = styled.div`width: 25%;`;

const InfoContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const ModalCard = styled.div`
  width: 70%;
  height: 80%;
  padding: 20px;
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

const Name = styled.div``;

const Number = styled.span``;

const Tagline = styled.div``;
