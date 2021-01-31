import {combineReducers} from 'redux';


const initialState = { frutas: [{nome:"Banana"},{nome:"Maçã"}] }

function frutasReducer(state = initialState, action){ // Não pode alterar o estato e retornar o mesmo valor
    
    switch(action.type){
        case "ADICIONAR": return { frutas:[ ...state.frutas, {...action.value }]};  // é necessário desestruturar o obj p/ adicionar o(s) novo(s) valor(res)
        default: return state;
    }
}

function tituloReducer( state = {titulo:"Frutas"}, action){ // Não pode alterar o msm estado, por isso usa obj
    switch(action.type){
        case "ALTERAR": return {titulo: action.value};
        default: return state;
    }
}

const reducers = combineReducers({frutasReducer, tituloReducer});
export default reducers;