import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import React from 'react';

import Routes from './Routes';
import {store} from './store.js';

const App = () => {
  let RouterComponent = <Router history={browserHistory}>{Routes}</Router>;

  return (
    <Provider store={store}>{RouterComponent}</Provider>
  );
};

export default App;
