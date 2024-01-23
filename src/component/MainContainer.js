import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null)return;
    const size=movies.length;
    const index=Math.floor(Math.random()*size);
    const mainMovie=movies[index];
    const id=mainMovie?.id;
    
  
  return (
    <div className='w-full'>
    <VideoTitle movie={mainMovie}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer