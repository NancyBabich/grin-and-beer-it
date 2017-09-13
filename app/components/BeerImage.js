import React from 'react';
import styled from 'styled-components';
import { ifProp, switchProp } from 'styled-tools';

const BeerImage = ({ size, imgSrc, padding }) => (
  <ImageContainer padding={padding}>
    <Image size={size} src={imgSrc} />
  </ImageContainer>
);

export default BeerImage;

const Image = styled.img`
  height: ${switchProp('size', {
    small: '80px',
    medium: '150px',
    big: '220px'
  })};
  width: auto;

  @media screen and (max-width: 886px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '130px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 796px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '110px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 775px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '150px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 593px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '130px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 553px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '120px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 533px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '110px',
      big: '220px'
    })};
    width: auto;
  }

  @media screen and (max-width: 515px) {
    height: ${switchProp('size', {
      small: '65px',
      medium: '110px',
      big: '200px'
    })};
    width: auto;
  }

  @media screen and (max-width: 493px) {
    height: ${switchProp('size', {
      small: '65px',
      medium: '160px',
      big: '200px'
    })};
    width: auto;
  }

  @media screen and (max-width: 445px) {
    height: ${switchProp('size', {
      small: '55px',
      medium: '160px',
      big: '200px'
    })};
    width: auto;
  }
`;

const ImageContainer = styled.div`
  padding: ${ifProp('padding', '0 2rem', '0')};

  @media screen and (max-width: 730px) {
    margin: ${ifProp('padding', '0 3rem 0 0', '0')};
  }

  @media screen and (max-width: 730px) {
    margin: ${ifProp('padding', '0 1rem 0 0', '0')};
  }
`;
