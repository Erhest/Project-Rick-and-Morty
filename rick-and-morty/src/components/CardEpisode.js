import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div>
        <h3>{episode.episode}</h3>
        <h4>{episode.name}</h4>
        <p>{episode.created}</p>
    </div>
  )
}

export default CardEpisode