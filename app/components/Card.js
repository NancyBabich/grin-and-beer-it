import React from 'react';
import styled from 'styled-components';

import Colors from '../consts/colors';

const Card = ({ imgSrc, name, tagline }) => (
  <Container>
    <Image src={imgSrc} />
    <Name>{name}</Name>
    <Tagline>{tagline}</Tagline>
  </Container>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 270px;
  margin: 20px;
  padding: 20px;
  background-color: ${Colors.white};

  &:hover {
    //width: 300px;
    //height: 300px;
    cursor: pointer;
  }
`;

const Name = styled.div`
  text-align: center;
  font-family: 'Nunito';
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Colors.themeColor};
`;

const Image = styled.img`
  height: 180px;
  width: auto;
`;

const Tagline = styled.div`
  font-family: 'Nunito';
  color: ${Colors.gray};
`;
