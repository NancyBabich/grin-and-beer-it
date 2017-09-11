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
        {isLoading && <Loader initial />}
        {!isLoading && cards}
      </BeerListContainer>
      {isAllDisplayed && (
        <Message text="Sadly, we have no more beers to show you" />
      )}
    </Container>
  );
};

export default BeerList;

const BeerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.lightGray};
`;
