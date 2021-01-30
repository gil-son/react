import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'; // Fornece a store para o redux

function numberReducer(state = 0, action){
  if(action.type === "ADICIONAR"){
    return state+1;
  }else if(action.type === "SUBTRAIR"){
    return state-1;
  }else{
    return state;
  }
   
}

function nomeReducer(state = "FULANO A", action){
  if(action.type === "NOVONOME"){
    return state = "FULANO B";
  }else if(action.type === "ANTIGONOME"){
    return state = "FULANO A";
  }else{
    return state;
  }
}

const reducers = combineReducers({numberReducer, nomeReducer});

// 2º parametro é opcional para consultar usando a extensão do Chrome Redux DevTools
const store = createStore(
     reducers,    
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


