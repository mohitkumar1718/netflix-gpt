import React from 'react'
import { IMG_URL_CDN } from '../utils/constant'

export const MovieCard = ({photoUrl}) => {
    
  return (
    <div className=' w-48 pr-4 '>
        <img  className='rounded-lg' src={IMG_URL_CDN+ photoUrl} alt="Movie img" />
    </div>
  )
}
