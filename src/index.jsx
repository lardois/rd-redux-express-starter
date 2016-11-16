import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

// Insert any middleware here (between parentheses)
const createStoreWithMiddleware = applyMiddleware(
)(createStore);

// Renders app component with reducers and browser history.
// Don't touch here, add routes to routes.jsx
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.app'));
