import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({character}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {navigate(`/character/${id}`)}

  return (
      <div className='character-box' onClick={() => seeMore(character.id)}>
        <div className='img-api'>
            <img src={character.image} alt={character.name} />
        </div>
          <div className='character-api'>
              <p>Name: <strong>{character.name}</strong></p>
              <p>Gender: {character.gender}</p>
              <p className='character-status'>Status: {character.status === 'Alive' ? 'O - ' + character.status : 'X - ' + character.status}</p>
          </div>
      </div>
  )
}
export default Card