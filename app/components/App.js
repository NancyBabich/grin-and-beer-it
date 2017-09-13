import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import BeerListContainer from '../containers/BeerListContainer';
import ModalContainer from '../containers/ModalContainer';
import { configure } from '../store/configureStore';

const App = () => {
  const store = configure();

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={BeerListContainer} />
          <Route path="/beers/:beerId" component={ModalContainer} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
