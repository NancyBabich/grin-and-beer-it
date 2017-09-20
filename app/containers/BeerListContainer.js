import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import BeerList from '../components/BeerList/BeerList';

class BeerListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = throttle(this.handleScroll, 300);
    this.state = {
      beers: [],
      isAllDisplayed: false,
      isLoading: true,
      isDisplaySettingsModal: false,
      page: null,
      sortingCategory: null,
      sortingOrder: null
    };
  }

  componentDidMount() {
    this.distributeEventListeners('add');
    this.fetchBeers(1);
  }

  componentWillUnmount() {
    this.distributeEventListeners('remove');
  }

  applyDisplaySettings = (sortingCategory, sortingOrder) => {
    this.setState({
      sortingCategory,
      sortingOrder
    });
    this.toggleSettingsModalState();
  };

  distributeEventListeners = action => {
    action === 'add'
      ? window.addEventListener('scroll', this.handleScroll, false)
      : window.removeEventListener('scroll', this.handleScroll, false);
  };

  fetchBeers = page => {
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`;

    if (!this.state.isAllDisplayed) {
      this.setState({
        isLoading: true
      });

      fetch(url)
        .then(res => res.json())
        .then(beers => {
          page === 1
            ? this.setState({
                beers,
                page,
                isAllDisplayed: beers.length ? false : true,
                isLoading: false
              })
            : this.setState(prevState => ({
                beers: [...prevState.beers, ...beers],
                page,
                isAllDisplayed: beers.length ? false : true,
                isLoading: false
              }));
        })
        .catch(err => console.log(err));
    }
  };

  handleScroll = () => {
    if (
      !this.props.isModal &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.state.beers.length &&
      !this.state.isLoading
    ) {
      this.fetchBeers(this.state.page + 1);
    }
  };

  toggleSettingsModalState = () => {
    this.setState({
      isDisplaySettingsModal: !this.state.isDisplaySettingsModal
    });
  };

  render() {
    return (
      <BeerList
        applyDisplaySettings={this.applyDisplaySettings}
        beers={this.state.beers}
        isAllDisplayed={this.state.isAllDisplayed}
        isDisplaySettingsModal={this.state.isDisplaySettingsModal}
        isLoading={this.state.isLoading}
        isModal={this.props.isModal}
        sortingCategory={this.state.sortingCategory}
        sortingOrder={this.state.sortingOrder}
        toggleSettingsModalState={this.toggleSettingsModalState}
      />
    );
  }
}

export default connect(state => {
  return {
    isModal: state.isModal
  };
})(BeerListContainer);
