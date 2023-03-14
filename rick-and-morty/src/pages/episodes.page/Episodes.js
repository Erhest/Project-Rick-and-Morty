import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Episodes = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {id} = useParams()
    const [episode, setEpisode] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/episode/${id}`)
                const data = await response.json()
                console.log(data)
                setEpisode({...data})
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])

  return (
    <div className='episode-page' key={episode.id}>
        <h2>{episode.name}</h2>
        <p>{episode.created}</p>
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
        <p>{episode.url}</p>
    </div>
  )
}

export default Episodes