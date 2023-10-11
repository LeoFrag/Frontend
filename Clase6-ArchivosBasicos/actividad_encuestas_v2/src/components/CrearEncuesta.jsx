import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const CrearEncuesta = ({agregarEncuesta}) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) => {
        agregarEncuesta(data)
        navigate('/')
    }
    return(
        <div>
            <h1>Crear nueva encuesta</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Titulo: </label>
                <input 
                type='text' 
                id='titulo' 
                name='titulo' {...register("titulo", 
                {required: "Este campo es obligatorio", 
                maxLength: {value:50, message: 'El titulo debe tener menos de 50 caracteres'}})}></input>
                {errors.titulo && <p>{errors.titulo.message}</p>}

                <label>Descripción:</label>
                <textarea
                id="descripcion"
                name="descripcion"
                {... register("descripcion", {
                maxLength: { value: 200, message: 'La descripción debe tener menos de 200 caracteres'}})}/>
                {errors.descripcion && <p>{errors.descripcion.message}</p>}

                <button type='submit'>Enviar</button>
            </form>
        </div>

    )
}

export default CrearEncuesta;