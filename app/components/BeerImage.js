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

  @media screen and (max-width: 493px) {
    height: ${switchProp('size', {
      small: '80px',
      medium: '160px',
      big: '220px'
    })};
    width: auto;
  }
`;

const ImageContainer = styled.div`
  padding: ${ifProp('padding', '0 2rem', '0')};
`;
