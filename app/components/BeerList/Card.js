import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import BeerImage from '../BeerImage';

const Card = ({ beerId, imgSrc, name, tagline }) => (
  <StyledLink
    to={{
      pathname: `/beers/${beerId}`,
      state: { isModal: true }
    }}
  >
    <Container>
      <BeerImage size="medium" imgSrc={imgSrc} />
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
    </Container>
  </StyledLink>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Colors.themeColor};
`;

const StyledLink = styled(Link)`text-decoration: none;`;

const Tagline = styled.div`
  font-family: 'Nunito';
  color: ${Colors.gray};
`;
