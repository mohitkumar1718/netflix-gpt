import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies===null)return;
    const mainMovie=movies[0];
    const {id}=mainMovie;
  
  return (
    <div>
    <VideoTitle movie={mainMovie}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer