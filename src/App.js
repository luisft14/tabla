import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import ComOso from './components/ComOso';
import ComTortuga from './components/ComTortuga';
import ComTigre from './components/ComTigre';
import ComPerro from './components/ComPerro';
import ComTiburon from './components/ComTiburon';
import React,{Fragment,useState} from 'react';
function App() {
  const componenteElegido=()=>{
    
  }
  return (
    <Fragment>
    <div className="App">
       <Formulario/>
       <ComOso/>
       <ComTortuga/>
       <ComTigre/>
       <ComPerro/>
       <ComTiburon/>
    </div>
    <div>  
    </div>
    </Fragment>
  );
}


export default App;
