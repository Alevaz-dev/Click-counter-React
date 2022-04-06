import logo from './logo.svg';
import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarClick = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <div>
        <Contador numClicks={numClicks}/>
        <Boton
        texto='Click'
        esBotonDeClick={ true }
        manejarClick={ manejarClick }/>
        <Boton
        texto='Reiniciar'
        esBotonDeClick={ false }
        manejarClick={ reiniciarClick }
        />
        </div>
      </div>
    </div>
  );
}

export default App;
