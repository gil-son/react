import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


export default function App() {
    // Retorna o state da aplicação redux
    const stateNumber = useSelector((state) => state.numberReducer); // state.reducer se tiver mais reducers, pois ele retorna um objeto
    const stateNome = useSelector((state) => state.nomeReducer)
    
    const dispatch = useDispatch();



    console.log(stateNome);
    console.log(stateNumber);


    return (
        <div className="App">
             {stateNumber}
             <br/>
             <button onClick = { () => dispatch( {type: "ADICIONAR"})}>
                 +
             </button>
             <button onClick = { () => dispatch( {type: "SUBTRAIR"})}>
                 -
             </button>
        

       
             
             <br/>
             {stateNome}
             <br/>
             <button onClick = { () => dispatch( {type: "NOVONOME"})}>
                 NOVO NOME
             </button>
             <button onClick = { () => dispatch( {type: "ANTIGONOME"})}>
                 ANTIGO NOME
             </button>
        </div>
    )
}
