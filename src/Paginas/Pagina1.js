import React, { useContext } from 'react'
import MiContexto from '../componentes/MiContexto'
import Input from '../componentes/Input'

const Pagina1 = () => {
    const {name} = useContext(MiContexto)
  return (
    <div>
      <Input/>
      {name}
    </div>
  )
}

export default Pagina1
