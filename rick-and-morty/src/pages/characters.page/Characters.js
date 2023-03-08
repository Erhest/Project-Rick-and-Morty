import React, { useEffect, useState } from 'react'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character`)
                const data = await response.json()
                console.log(data)
                setCharacter(data.results)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])
    
  return (
    <section>
        <ul>
            {
                character.map((item) =>(
                    <li key={item.id}>
                        <img src={item.image} alt="Foto do personagem" />
                        <h2 >{item.name}</h2>
                        <p>{item.status}</p>
                        <p>{item.gender}</p>
                        <p>{item.species}</p>
                        <p>{item.origin.name}</p>
                    </li>
                ))
            }
            
        </ul> 
    </section>
  )
}

export default Characters