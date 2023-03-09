import React, { useEffect, useState } from 'react'
import CardEpisode from '../../components/CardEpisode'

const Episode = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [episode, setEpisode] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/episode`)
                const data = await response.json()
                
                setEpisode(data.results)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])

    return (
        <div className='card'>
            {
                episode.map((item) => (
                    <CardEpisode key={item.id} episode={item} />
                ))
            }    
        </div>
    )
}

export default Episode