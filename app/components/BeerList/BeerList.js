import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Colors from '../../consts/colors';
import Header from './Header';
import Loader from '../Loader';
import Message from './Message';

const BeerList = ({ beers, isAllDisplayed, isLoading }) => {
  const cards = beers.map(beer => (
    <Card
      beerId={beer.id}
      tagline={beer.tagline}
      name={beer.name}
      imgSrc={beer.image_url}
      key={beer.id}
    />
  ));

  return (
    <Container>
      <Header />
      <BeerListContainer>
        {isLoading && !beers.length && <Loader initial />}
        {isLoading && beers.length ? (
          <LoadingBeerListContainer>
            {cards} <Loader />
          </LoadingBeerListContainer>
        ) : null}
        {!isLoading ? cards : null}
      </BeerListContainer>
      {isAllDisplayed && (
        <Message text="Sadly, we have no more beers to show you" />
      )}
    </Container>
  );
};

export default BeerList;

const LoadingBeerListContainer = styled.div`
  display: flex;
  width: 100%;
`;

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
