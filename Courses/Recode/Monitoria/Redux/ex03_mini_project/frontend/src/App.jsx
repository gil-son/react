import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Menu from './components/menu';


export default function App() {
    const [inputFrutas, setInputFrutas] = React.useState("");
    const [inputTitulo, setInputTitulo] = React.useState("");


    // Retorna o state da aplicação redux
    const frutas = useSelector((state) => state.frutasReducer.frutas); // Sempre que att o estado o Redux volta daqui
    const titulo = useSelector((state) => state.tituloReducer.titulo);
   
    const dispatch = useDispatch();

    console.log(frutas); 
    console.log(titulo); 
    // console.log(frutas[0]);


    function adicionarFruta(event){
        event.preventDefault(); // previne o carregamento da página

        // Vai criar um objeto ao invés do formData, para enviar
        const objFruta = {
            nome: inputFrutas
        }

        dispatch( {type: "ADICIONAR", value: objFruta}) // Responsável por despachar os actions, pode ficar em qualquer componente
    }



    function alterarTitulo(event){
       setInputTitulo(event.target.value);
       dispatch( {type: "ALTERAR", value: event.target.value});
    }

    return (

        <div>
            <Menu/>
            <form>
                <label>Titulo</label>
                <input placeholder="Digite o título..." 
                value={inputTitulo}
                onChange={alterarTitulo}/>
            </form>
             <h1>{titulo}</h1>
            <form onSubmit={adicionarFruta}>

                <input placehorder="Digite um fruta..."
                    value={inputFrutas}
                    onChange={(event) => setInputFrutas(event.target.value)}
                 />
                <button>
                     Enviar
                </button>
            </form>
            

             {frutas.map( (fruta, index) =>{ // o map cria index, se precisar
                 return ( 
                 
                         <li key={index}>{fruta.nome}</li>
                    );
             })}
             
        </div>
    )
}
