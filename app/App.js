import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import ModalSwitch from './ModalSwitch';

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;
