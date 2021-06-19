import React from 'react';
import ReactDOM from 'react-dom';


import Routes from './Components/Routes'


import Global from './styles.js'

ReactDOM.render(
  <>
    <Global />
    <Routes />
  </>,
  document.getElementById('root')
);