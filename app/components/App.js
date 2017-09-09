import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Colors from '../consts/colors';
import Loader from './Loader';
import Message from './Message';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isAllDisplayed: false,
      isLoading: true,
      page: 1
    };
  }

  // componentDidMount() {
  //   this.fetchBeers();
  // }

  fetchBeers = () => {
    const url = `https://api.punkapi.com/v2/beers?page=${this.state
      .page}&per_page=20`;

    fetch(url)
      .then(res => res.json())
      .then(beers => {
        if (beers.length) {
          this.setState({
            beers: this.state.beers.concat(beers),
            isLoading: false
          });
        } else {
          this.setState({ isAllDisplayed: true });
        }
      });
  };

  render() {
    // const cards = this.state.beers.map(beer => (
    //   <Card
    //     tagline={beer.tagline}
    //     name={beer.name}
    //     imgSrc={beer.image_url}
    //     key={beer.id}
    //   />
    // ));

    return (
      <Container>
        {/* {!this.state.isLoading && cards} */}
        {this.state.isLoading && <Loader initial />}
        {/* <button
          onClick={
            this.setState({page: this.state.page + 1}, () =>
            this.fetchBeers())
            
            //this.fetchBeers(this.state.page + 1)
          }
        >
          Drink More!
        </button>   */}
        {this.state.isAllDisplayed && (
          <Message text="Sadly, we have no more beers to show you" />
        )}
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
