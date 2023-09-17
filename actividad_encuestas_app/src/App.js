import React, {useState} from 'react';
import './App.css';

import Encuestas from './componentes/Encuestas.jsx';



function App() {

  const encuestas = [{id:1, pregunta: '¿Cual es tu color favorito?', opciones: ['Rojo', 'Azul', 'Verde']}, { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
  ['Pizza', 'Hamburguesa', 'Sushi'] }]


  return (
    <div className="App">
      <h1>Aplicacion de Encuestas</h1>
      <Encuestas encuestas={encuestas}></Encuestas>
    </div>
  );
}

export default App;
