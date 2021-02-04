// Recorte
import logo from '../logo.svg';
import goku from './goku.png';

function Cabecalho(){
    return(
        <div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div> 
            <div>
                    <img src={goku}  alt="goku"/>
            </div>
        </div>
    
    )
}

export default Cabecalho;