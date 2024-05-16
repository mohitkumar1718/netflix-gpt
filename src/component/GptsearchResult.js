import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

export const GptSearchResult = () => {
  const {moviesResult,gptMovies}=useSelector(store=>store.gpt);
  if(!gptMovies) return null;
  return (
    <div className='p-4 mt-4 bg-black text-white bg-opacity-90'>
    {
      gptMovies?.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={moviesResult[index]}/>)
    }
    
    </div>
  )
}
