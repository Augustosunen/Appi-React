import React, { useState } from 'react'
import Estado2 from '../Hojas-de-Estilo/Estado2.css'

const Estado = () => {
    const [counter,setCounter] = useState(0)
  return (
    <div>
      {counter}

      <button className= 'Añadir' onClick= {() => setCounter(counter + 1)}>Añadir</button>
      <button className= 'Añadir' onClick= {() => setCounter(counter - 1)}>Eliminar</button>
    </div>
  )
}

export default Estado
