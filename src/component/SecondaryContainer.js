import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {
  const movies=useSelector(store=> store.movies);

  return (
    movies &&(
    <div className='-mt-64 relative z-50' >
   { movies?.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>}
   {movies?.topRatedMovies && <MovieList title={"Top Raed"} movies={movies?.topRatedMovies}/>}
   {movies?.popularMovies && <MovieList title={"Popular"} movies={movies?.popularMovies}/>}
   {movies?.upcomingMovies && <MovieList title={"UpComing Movies"} movies={movies?.upcomingMovies}/> }
    </div>
  )
  )
}

export default SecondaryContainer