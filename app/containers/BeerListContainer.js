import React, { Component } from 'react';
import _ from 'underscore';

import BeerList from '../components/BeerList';

export default class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      isAllDisplayed: false,
      //      isError: false,
      isLoading: true,
      page: 1
    };
  }

  componentDidMount() {
    this.distributeEventListeners('add');
    this.fetchBeers();
  }

  componentWillUnmount() {
    this.distributeEventListeners('remove');
  }

  distributeEventListeners = action => {
    action === 'add'
      ? window.addEventListener('scroll', this.onScroll, false)
      : window.removeEventListener('scroll', this.onScroll, false);
  };

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
    // .catch((err) => this.setState({isError: true}))
  };

  fetchMoreBeers = () => {
    this.setState({ page: this.state.page + 1 }, this.fetchBeers());
  };

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.fetchMoreBeers();
    }
  };

  render() {
    return (
      <BeerList
        beers={this.state.beers}
        fetchMoreBeers={this.fetchMoreBeers}
        isAllDisplayed={this.state.isAllDisplayed}
        isLoading={this.state.isLoading}
      />
    );
  }
}
