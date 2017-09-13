import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import Colors from '../../consts/colors';
import getBeerCards from '../../helpers/getBeerCards';
import Header from './Header';
import Loader from '../Loader';
import Message from './Message';

const BeerList = ({ beers, isAllDisplayed, isLoading, isModal }) => (
  <Container isModal={isModal}>
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
          <Message text="Sadly, we have no more beers to show you :-(" />
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
  kl;dkglawidth: 100%;
  margin-top: 2rem;
  padding: 0 2rem 7rem 2rem;

  @media screen and (max-width: 950px) {
    padding: 0 0 7rem 0;
  }

`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: ${ifProp('isModal', '125vh', 'auto')};
  overflow: ${ifProp('isModal', 'hidden', 'visible')};
  background-color: ${Colors.lightGray};

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 720px) {
    height: ${ifProp('isModal', '135vh', 'auto')};
  }

  @media screen and (max-width: 600px) {
    height: ${ifProp('isModal', '145vh', 'auto')};
  }
`;
