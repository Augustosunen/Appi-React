import React, { useContext, useEffect, useState } from 'react'
import MiContexto from './MiContexto';
import Character2 from '../Hojas-de-Estilo/Character2.css'

const Character = () => {

    const [page, setPage] = useState(1);
    const [character, setCharacter] = useState([]);
    const {name,name2,serName} = useContext(MiContexto)

    const getCharacters = async() => {
        
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const resJson = await res.json ()

        setCharacter(resJson.results)
    }

    useEffect(() => {
        getCharacters()

    },[page])

  return (
    <div>
    {name}
    {page < 10 && <button className='Boton' onClick={() => setPage (page + 1)}>Siguiente Pagina</button>}
    {page}
    {page > 1 && <button className='Boton' onClick={() => setPage (page - 1)} >Anterior Pagina</button>}
    {character.filter((character) => character.name.includes(name)).map((character, index) => {return <div key={index}>
    <p>{character.name}</p>
    <img src={character.image} alt={character.name} />

    </div>})}
    </div>
      
  )
}

export default Character
