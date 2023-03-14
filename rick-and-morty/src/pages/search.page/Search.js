import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card'
import CardLocation from '../../components/CardLocation'
import CardEpisode from '../../components/CardEpisode'

const Search = () => {
    const url = 'https://rickandmortyapi.com/api'
    const {search} = useParams()
    const [characters, setCharacters] = useState([])
    const [episode, setEpisode] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {
        const requests = async () => {
            try{
                // Characters
                let response = await fetch(`${url}/character`)
                let data = await response.json()
                const results = data.results
                const array = results.filter((item) => item?.name.toLowerCase().includes(search?.toLocaleLowerCase()))
                // console.log(array)
                setCharacters(array)
                
                // episode
                response = await fetch(`${url}/episode`)
                data = await response.json()
                const resultsEpisode = data.results
                const arrayEpisodes = resultsEpisode.filter((item) => item?.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
                // console.log(arrayEpisodes)
                setEpisode(arrayEpisodes)

                //Location
                response = await fetch(`${url}/location`)
                data = await response.json()
                const resultsLocation = data.results
                const arrayLocation = resultsLocation.filter((item) => item?.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase()))
                // console.log(arrayLocation)
                setLocation(arrayLocation)
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
                    <p className="list-notfound">Error, 404 Not Found ;(</p>
            }
            
        </div>

        <h3>Location</h3>
        <div className='location-home'>
            {
                location.length > 0
                ?
                    <div className="card-location">
                        {
                            location.map((item) => (
                                <CardLocation key={item.id} location={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Error, 404 Not Found</p>
            }
        </div>

        <h3>Episode</h3>
        <div className='episode-home'>
            {
                episode.length > 0
                ?
                    <div className="card-episode">
                        {
                            episode.map((item) => (
                                <CardEpisode key={item.id} episode={item} />
                            ))
                        }
                    </div>
                :
                    <p className="list-notfound">Error, 404 Not Found</p>
            }
        </div>
    </div>
  )
}

export default Search