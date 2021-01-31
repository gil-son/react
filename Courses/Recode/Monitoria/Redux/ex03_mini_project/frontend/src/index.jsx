import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'; // Fornece a store para o redux
import store from './store'; // armazena




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


