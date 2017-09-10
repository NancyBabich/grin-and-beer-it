import React, { Component } from 'react';
import { throttle } from 'lodash';

import BeerList from '../components/BeerList';

export default class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    //this.fetchBeers = throttle(this.fetchBeers, 300);
    this.state = {
      beers: [],
      isAllDisplayed: false,
      isLoading: true,
      page: null
    };
  }

  componentDidMount() {
    //this.distributeEventListeners('add');
    this.fetchBeers(1);
  }

  // componentDidUpdate() {

  // }

  // componentWillUnmount() {
  //   this.distributeEventListeners('remove');
  // }

  // distributeEventListeners = action => {
  //   action === 'add'
  //     ? window.addEventListener('scroll', this.onScroll, false)
  //     : window.removeEventListener('scroll', this.onScroll, false);
  // };

  fetchBeers = page => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`;
    console.log(page);
    console.log(this.state.page);
    fetch(url)
      .then(res => res.json())
      .then(beers => {
        // POCZĄTEK if (beers.length) {
        //   this.setState(prevState => ({
        //     beers: [...prevState.beers, beers][0],
        //     isLoading: false
        //   }));
        // } else {
        //   this.setState({ isAllDisplayed: true });
        //  KONIEC }
        console.log('most recent: ' + page);
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

  // fetchMoreBeers = () => {
  //   !this.state.isLoading &&
  //     this.setState(prevState => {
  //       page: prevState.page + 1;
  //     }, this.fetchBeers(this.state.page + 1));
  // };

  //handleCardClick = (beerId, history) => history.push(`/beers/${beerId}`);

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.state.beers.length
    ) {
      this.fetchMoreBeers();
    }
  };

  render() {
    return (
      <BeerList
        beers={this.state.beers}
        fetchBeers={this.fetchBeers}
        handleCardClick={this.handleCardClick}
        isAllDisplayed={this.state.isAllDisplayed}
        isLoading={this.state.isLoading}
        page={this.state.page + 1}
      />
    );
  }
}
