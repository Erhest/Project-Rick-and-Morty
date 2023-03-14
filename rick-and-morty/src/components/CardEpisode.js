import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardEpisode = ({episode}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {navigate(`/episode/${id}`)}
  return (
    <div className='card-episode' onClick={() => seeMore(episode.id)}>
        <h3>{episode.episode}</h3>
        <h4>{episode.name}</h4>
        <p>{episode.created}</p>
    </div>
  )
}

export default CardEpisode