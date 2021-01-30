import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // Fornece a store para o redux

function reducer(state = 0, action){
  if(action.type === "ADICIONAR"){
    return state+1;
  }else if(action.type === "SUBTRAIR"){
    return state-1;
  }else{
    return state;
  }
   
}

const store = createStore(reducer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


