import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';
import getBeerCards from '../../helpers/getBeerCards';
import Header from './Header';
import Loader from '../Loader';
import Message from './Message';

const BeerList = ({ beers, isAllDisplayed, isLoading }) => (
  <Container>
    <Header />
    {isLoading && !beers.length ? <Loader initial /> : null}
    {isLoading && beers.length ? (
      <BeerCardsContainer>
        {getBeerCards(beers)}
        <Loader />
      </BeerCardsContainer>
    ) : null}
    {!isLoading && (
      <BeerCardsContainer>
        {getBeerCards(beers)}
        {isAllDisplayed && (
          <Message text="Sadly, we have no more beers to show you" />
        )}
      </BeerCardsContainer>
    )}
  </Container>
);

export default BeerList;

const BeerCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  background-color: ${Colors.lightGray};
`;
