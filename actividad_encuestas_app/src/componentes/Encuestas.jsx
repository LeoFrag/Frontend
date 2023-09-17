import React from 'react';
import './Encuestas.css'
function Encuestas({ encuestas }) {
    return (
        <div className='encuestas'>
            <h2>Encuestas Disponibles</h2>
            <ol>
                {encuestas.map(encuesta => (
                    <li key={encuesta.id}>
                        <p className='preguntas'>{encuesta.pregunta}</p>
                        <ul>
                            {encuesta.opciones.map((opcion, index) => (
                                <li key={index}>{opcion}</li>
                            ))} 
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Encuestas;
