import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


export default function App() {
    // Retorna o state da aplicação redux
    const state = useSelector((state) => state); // state.reducer se tiver mais reducers, pois ele retorna um objeto
    const dispatch = useDispatch();

    console.log(state);

    return (
        <div className="App">
             {state}
             <br/>
             <button onClick = { () => dispatch( {type: "ADICIONAR"})}>
                 +
             </button>
             <button onClick = { () => dispatch( {type: "SUBTRAIR"})}>
                 -
             </button>
        </div>
    )
}
