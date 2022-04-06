import React from "react";
import '../Componentes/hojas de estilo/Contador.css';

function contadorDeClicks({ numClicks }) {
  return(
    <div className="contador">
      {numClicks}
    </div>
  )
}

export default contadorDeClicks;