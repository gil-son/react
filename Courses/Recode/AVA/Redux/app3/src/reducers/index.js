// import {clickReducer} from './clickReducer';
// import {outroReducer} from '/outroReducer';
// import {maisUmReducer} from './maisUmReducer';
// import {combineReducers} from 'redux';

// export const Reducers = combineReducers({
//     clickState: clickReducer,
//     outroState: outroReducer,
//     maisState: maisUmReducer
// });


import { clickReducer } from './clickReducer'; 

import { combineReducers } from 'redux'; 

  

export const Reducers = combineReducers({ 
  // estado     função pura
  clickState: clickReducer 

});

