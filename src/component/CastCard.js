import React from 'react'
import { IMG_URL_CDN } from '../utils/constant'

const CastCard = ({photo,name}) => {
    
  return (
    <div className='mr-5' >
    <img className='h-40 w-40 rounded-full ' src={'https://image.tmdb.org/t/p/w138_and_h175_face'+photo} alt="img" />
    <h2 className='text-white text-center whitespace-nowrap text-ellipsis overflow-hidden'>{name}</h2>
    </div>
  )
}

export default CastCard