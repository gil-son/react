import './App.css';
import {lazy, Suspense} from 'react';
import carregando from './carregando.gif';

/*

 Code Splitting: Cortar o código

Lazy Loading: Trocar info dos sites e atende conexões lentas

 */

const Cabecalho = lazy( () => import('./code-splitting/Cabecalho'));
const Slogan = lazy( () => import('./code-splitting/Slogan'));
const Rodape = lazy( () => import('./code-splitting/Rodape'));


function App() { 
  return (
    <div className="App">
      <header className="App-header">
        
      <Suspense fallback = 
        {
          <img src={carregando} />
          
        }
       >
        <Cabecalho/>
      </Suspense>
        
        
        
        <Suspense fallback =
        {
          <p>
            
          </p>
          
        }
       >
        <Slogan/>
      </Suspense>


      <Suspense fallback =
        {
          <p>
             
          </p>
          
        }
       >
        <Rodape/>
      </Suspense>





      </header>
    </div>
  );
}

export default App;
