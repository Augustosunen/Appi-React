import React from 'react'
import {useForm} from 'react-hook-form'
import Registro2 from '../Hojas-de-Estilo/Registro2.css'

const Registro = () => {
    const {register, handleSubmit} = useForm()

    const result = (data) => {
        console.log(data)

    }
  return (
    <div className='planilla-registro'>
      <form onSubmit={handleSubmit(result)}>
      <input typeclass='text' placeholder='Nombre' {...register('Nombre')}/>
      <input typeclass='text' placeholder='Apellido'{...register('Apellido')}/>
      <input typeclass='text' placeholder='mail'{...register('mail')}/>
      <input typeclass='number' placeholder='Edad'{...register('Edad')}/>
      
      <button className='submit'>Registrar</button>
      

      </form>
    </div>
  )
}

export default Registro
