import React from 'react'

import { useNavigate } from 'react-router-dom'

const Card = ({character}) => {
  const navigate = useNavigate()
  const seeMore = (id) => {navigate(`/character/${id}`)}

  return (
      <div onClick={() => seeMore(character.id)}>
        <div className='img-api'>
            <img src={character.image} alt={character.name} />
        </div>
          <div className='character-api'>
              <p>{character.name}</p>
              <p>{character.gender}</p>
              <p>{character.status === 'Alive' ? 'O - Alive' : 'X - Dead or Unknown'}</p>
          </div>
      </div>
  )
}
export default Card