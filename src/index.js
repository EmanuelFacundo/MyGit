import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi'
import thunk from 'redux-thunk';

import Routes from './Components/Routes'
import rootReducer from './rootReducer'
import Global from './styles.js'


const store = applyMiddleware(multi, thunk, promise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <Routes />
  </Provider>,
  document.getElementById('root')
);