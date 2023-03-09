import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import CardLocation from '../../components/CardLocation'
import CardEpisode from '../../components/CardEpisode'

const Search = () => {
    const {search} = useParams()
    const url = 'https://rickandmortyapi.com/api'
    const [characters, setCharacters] = useState([])
    const [episode, setEpisode] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {
        const requests = async () => {
            try{
                // Characters
                let response = await fetch(`${url}/character`)
                let data = await response.json()
                const array = data.filter((item) => item?.name.toLowerCase().includes(search?.toLocaleLowerCase()))
                console.log(array)
                setCharacters([...array])
                
                // episode
                response = await fetch(`${url}/episode`)
                data = await response.json()
                const arrayEpisodes = data.filter((item) => item?.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
                console.log(arrayEpisodes)
                setEpisode([...arrayEpisodes])

                //Location
                response = await fetch(`${url}/location`)
                data = await response.json()
                const arrayLocation = data.filter((item) => item?.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
                console.log(arrayLocation)
                setLocation([...arrayLocation])
            }catch(error){
                console.log(error.message)
            }}
        requests()
    }, [search])

  return (
    <div className='search'>
        <h2>{search}</h2>
        <h3>Characters</h3>
        <div className='characters'>
            {
                characters.length > 0
                ?
                    <div className='card-character'> 
                        {
                            characters.map((item) => (
                                <Card key={item.id} character={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Opss, 404 Not Found ;(</p>
            }
            
        </div>
        <h3>Location</h3>
        <div className='location'>
            {
                location.length > 0
                ?
                    <div className="card-location">
                        {
                            location.map((item, i) => (
                                <CardLocation key={item.id} location={item} i={i+1} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Opss, 404 Not Found</p>
            }
        </div>
        <h3>Episode</h3>
        <div className='episode'>
            {
                episode.length > 0
                ?
                    <div className="card-episode">
                        {
                            episode.map((item, i) => (
                                <CardEpisode key={item.id} episode={item} i={i+1} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Opss, 404 Not Found</p>
            }
        </div>
    </div>
  )
}

export default Search