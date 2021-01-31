import React from 'react';
import { useSelector } from 'react-redux';
// Componente usando o valor sem precisar de props
function Menu(){
    const stateTitulo = useSelector((state) =>
         state.tituloReducer.titulo);

    return(
        
        <div>
            Menu:
            {stateTitulo}
        </div>
    )
}

export default Menu;