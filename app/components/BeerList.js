import React from 'react';
import styled from 'styled-components';

import Loader from './Loader';
import Message from './Message';
import Card from './Card';
import Colors from '../consts/colors';

const BeerList = ({ beers, fetchMoreBeers, isAllDisplayed, isLoading }) => {
  const cards = beers.map(beer => (
    <Card
      tagline={beer.tagline}
      name={beer.name}
      imgSrc={beer.image_url}
      key={beer.id}
    />
  ));

  return (
    <Container>
      {isLoading && <Loader initial />}
      {isLoading && cards}
      <button
        onClick={fetchMoreBeers}

        //this.fetchBeers(this.state.page + 1)
      >
        Drink More!
      </button>
      {isAllDisplayed && (
        <Message text="Sadly, we have no more beers to show you" />
      )}
    </Container>
  );
};

export default BeerList;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.lightGray};
`;
