import React from "react";
import '../Componentes/hojas de estilo/boton.css';
function boton({ texto, esBotonDeClick, manejarClick }){
    return (
      <button
      className={ esBotonDeClick ? 'boton-click': 'boton-reiniciar'}
      onClick={ manejarClick }>
        {texto}
      </button>
    )
}

export default boton;