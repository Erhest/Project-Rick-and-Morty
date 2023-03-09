import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {id} = useParams()
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character/${id}`)
                const data = await response.json()
                console.log(data)
                setCharacter({...data})
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])
    
  return (
    <section className='character-page'>
        <h1>{character.name}</h1>
        <div key={character.id}>
            <img src={character.image} alt={character.name} />            
            <p>Status: {character.status ? 'O ' + character.status : 'X' + character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character?.origin?.name}</p>
            <p>Location: {character?.location?.name}</p>
        </div>
    </section>
    )
}

export default Character