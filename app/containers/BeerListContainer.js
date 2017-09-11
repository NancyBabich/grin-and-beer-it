import React, { Component } from 'react';
import { throttle } from 'lodash';

import BeerList from '../components/BeerList/BeerList';

export default class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll, 300);
    this.state = {
      beers: [],
      isAllDisplayed: false,
      isLoading: true,
      page: null
    };
  }

  componentDidMount() {
    this.distributeEventListeners('add');
    this.fetchBeers(1);
  }

  componentWillUnmount() {
    this.distributeEventListeners('remove');
  }

  distributeEventListeners = action => {
    action === 'add'
      ? window.addEventListener('scroll', this.handleScroll, false)
      : window.removeEventListener('scroll', this.handleScroll, false);
  };

  fetchBeers = page => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`;
    fetch(url)
      .then(res => res.json())
      .then(beers => {
        page === 1
          ? this.setState({
              beers,
              page,
              isLoading: false
            })
          : this.setState(prevState => ({
              beers: [...prevState.beers, ...beers],
              page,
              isLoading: false
            }));
      });
    // .catch((err) => this.setState({isError: true}))
  };

  //handleCardClick = (beerId, history) => history.push(`/beers/${beerId}`);

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 700 &&
      this.state.beers.length &&
      !this.state.isLoading
    ) {
      this.fetchBeers(this.state.page + 1);
    }
  };

  render() {
    return (
      <BeerList
        beers={this.state.beers}
        isAllDisplayed={this.state.isAllDisplayed}
        isLoading={this.state.isLoading}
      />
    );
  }
}
