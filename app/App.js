import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import BeerListContainer from './containers/BeerListContainer';
import ModalContainer from './containers/ModalContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={BeerListContainer} />
        <Route path="/beers/:beerId" component={ModalContainer} />
      </div>
    </Router>
  );
};

export default App;
