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
    medium: '180px',
    big: '220px'
  })};
  width: auto;
`;

const ImageContainer = styled.div`
  padding: ${ifProp('padding', '0 2rem', '0')};
`;
