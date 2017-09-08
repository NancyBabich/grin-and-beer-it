import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Colors from '../consts/colors';
import Loader from './Loader';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=20';

    fetch(url)
      .then(res => res.json())
      .then(beers => {
        this.setState({ beers, isLoading: false });
      });
  }

  render() {
    const cards = this.state.beers.map(beer => (
      <Card
        tagline={beer.tagline}
        name={beer.name}
        imgSrc={beer.image_url}
        key={beer.id}
      />
    ));

    return (
      <Container>
        {!this.state.isLoading && cards}
        {this.state.isLoading && <Loader />}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.lightGray};
`;
