import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import CardEpisode from '../../components/CardEpisode'
import CardLocation from '../../components/CardLocation'

const Home = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])
    const [location, setLocation] = useState([])
    const [episode, setEpisode] = useState([])
    
    useEffect(() =>{
      const request = async () =>{
        setCharacter(await httpRequest(`${url}/character`))
        setLocation(await httpRequest(`${url}/location`))
        setEpisode(await httpRequest(`${url}/episode`))
      }
      request()
    }, [])

    const httpRequest = async (url) => {
      try{
        const response = await fetch(url)
        const data = await response.json()
        return data.results
      }catch(error){
        console.log('Error: ' + error.message)
      }
    }

  return (
    <div className='main-div'>
      <h2>Characters</h2>
      <div className='characters-home'>
          {
            character.map((item) => (
              <Card key={item.id} character={item} />                        
              ))
          }
      </div>

      <h2>Locations</h2>
      <div className='location-home'>
          {
            location.map((item) => (
              <CardLocation key={item.id} location={item}  />
            ))
          }   
      </div>

      <h2>Episodes</h2>
      <div className='episode-home'>
          {
            episode.map((item) => (
              <CardEpisode key={item.id} episode={item} />
            ))
          }   
      </div>
  </div>
  )
}

export default Home