import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import BeerListContainer from './containers/BeerListContainer';
import ModalContainer from './containers/ModalContainer';

export default class ModalSwitch extends Component {
  constructor(props) {
    super(props);

    this.previousLocation = this.props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={BeerListContainer} />
        </Switch>
        <Route path="/beers/:beerId" component={ModalContainer} />
        {isModal ? (
          <Route path="/beers/:beerId" component={ModalContainer} />
        ) : null}
      </div>
    );
  }
}
