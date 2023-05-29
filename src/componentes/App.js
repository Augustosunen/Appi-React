import Estado from './Estado.js'
import '../Hojas-de-Estilo/App.css';
import Button from './Button.js';
import Character from './Character.js';
import { useState } from 'react';
import MiContexto from './MiContexto.js';
import Input from './Input.js';
import Input2 from './Input2.js';
import Registro from './Registro.js';
import Logo from '../Imagenes/rickandmorty1.jpg'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Pagina1 from '../Paginas/Pagina1.js';

import Pagina3 from '../Paginas/Pagina3.js';



function App() {
  const [name,setName] = useState("")
  const [name2,setName2] = useState("")
  return (
    <MiContexto.Provider value = {{name,setName,name2,setName2}}>
    <div className="App">
    
    <div className='Bienvenido'>
    <p>Bienvenido!!!</p>
    </div>
    <Registro/>
    <div className='Personaje'>
    <p>Busca tu personaje favorito...</p>
    </div>
    <Input/>
    <Input2/>
      
      <Estado/>
      
      <Character/>
    </div>

    <BrowserRouter>
     <Routes>
      <Route path="/pagina1" element={<Pagina1 />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/pagina3" element={<Pagina3 />} />
     </Routes>
    </BrowserRouter>

    </MiContexto.Provider>
  );
}

export default App;
