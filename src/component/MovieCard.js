import React from 'react'
import { IMG_URL_CDN } from '../utils/constant'
import { Link, useNavigate } from 'react-router-dom';

export const MovieCard = ({movie}) => {
   const photoUrl=movie.backdrop_path;
   const nevigate = useNavigate();
   if(!photoUrl) return null;
  
   const gotoDetails=()=>{
        nevigate('/movie/'+movie?.id);
   }
  return (
    <Link to={'/movie/'+movie?.id}>
    <div  className=' w-36 md:w-48 pr-4 cursor-pointer hover:opacity-70 '>
        <img  className='rounded-lg' src={IMG_URL_CDN+ photoUrl} alt="Movie img" />
        <h2 className='text-white  whitespace-nowrap text-ellipsis overflow-hidden'>{movie.original_title}</h2>
    </div>
    </Link>
  )
}
