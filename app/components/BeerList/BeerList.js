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
    <BeerListContainer>
      {isLoading && !beers.length && <Loader initial />}
      {isLoading && beers.length ? (
        <LoadingBeerListContainer>
          {getBeerCards(beers)} <Loader />
        </LoadingBeerListContainer>
      ) : null}
      {!isLoading ? getBeerCards(beers) : null}
    </BeerListContainer>
    {isAllDisplayed && (
      <Message text="Sadly, we have no more beers to show you" />
    )}
  </Container>
);

export default BeerList;

const BeerListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 4rem;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 6rem;
  background-color: ${Colors.lightGray};
`;

const LoadingBeerListContainer = styled.div`
  display: flex;
  width: 100%;
`;
