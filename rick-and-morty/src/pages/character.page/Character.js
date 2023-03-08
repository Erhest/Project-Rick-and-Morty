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
                setCharacter(data.results)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])

  return (
    <div>Character</div>
  )
}

export default Character