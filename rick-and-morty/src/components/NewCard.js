import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ titulo, subTitulo, texto, url, endpoint, status}) => {
  const number = url.split('/')[5]
  return (
      <Link to={`/${endpoint}/${number}`} className={status ? 'card-item' : 'item'}>
          <div>
              <p className='title'>{titulo}</p>
              <p className='subTitle'>{subTitulo}</p>
              <p className='text'>{texto}</p>
          </div>
      </Link>
  )
}

export default Card