import React, { Component } from 'react';

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
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then(res => res.json())
      .then(beers => {
        this.setState({ beers, isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <p>Welcome</p>
        {this.state.beers &&
        this.state.beers[0] && <div>{this.state.beers[0].id}</div>}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
