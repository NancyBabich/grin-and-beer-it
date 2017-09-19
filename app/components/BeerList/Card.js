import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import BeerImage from '../BeerImage';
import formatString from '../../helpers/formatString';

const Card = ({ beerId, imgSrc, name, tagline }) => (
  <StyledLink
    to={{
      pathname: `/beers/${beerId}`
    }}
  >
    <Container>
      <BeerImage size="medium" imgSrc={imgSrc} />
      <Name>{formatString(name)}</Name>
      <Tagline>{formatString(tagline)}</Tagline>
    </Container>
  </StyledLink>
);

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 250px;
  margin: 20px;
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 886px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 796px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 775px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 593px) {
    width: 230px;
    height: 230px;
  }

  @media screen and (max-width: 553px) {
    width: 220px;
    height: 220px;
  }

  @media screen and (max-width: 533px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (max-width: 493px) {
    width: 270px;
    height: 270px;
  }
`;

const Name = styled.span`
  width: 100%;
  white-space: nowrap;
  text-align: center;
  font-family: 'Nunito';
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Colors.themeColor};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  &:hover {
    overflow: visible;
    background-color: inherit;
    white-space: normal;
  }

  @media screen and (max-width: 886px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 796px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 775px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 593px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 553px) {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 533px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 493px) {
    font-size: 1.45rem;
  }
`;

const StyledLink = styled(Link)`text-decoration: none;`;

const Tagline = styled.div`
  width: 100%;
  white-space: nowrap;
  font-family: 'Nunito';
  color: ${Colors.gray};
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;

  &:hover {
    overflow: visible;
    background-color: inherit;
    white-space: normal;
  }

  @media screen and (max-width: 886px) {
    font-size: 0.9;
  }

  @media screen and (max-width: 775px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 593px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 553px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 533px) {
    font-size: 0.85rem;
  }

  @media screen and (max-width: 493px) {
    font-size: 1.1rem;
  }
`;
