import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
  const movies=useSelector(store=> store.movies?.nowPlayingMovies);

  return (
    <div >
    {movies && <MovieList title={"Now Playing"} movies={movies}/>}
    {movies && <MovieList title={"Trending"} movies={movies}/>}
    {movies && <MovieList title={"Horror"} movies={movies}/>}
    {movies && <MovieList title={"Popular"} movies={movies}/>}
    </div>
  )
}

export default SecondaryContainer