import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies=()=>{
	const popularMovie=useSelector(store=>store.movies.nowPlayingMovies);
    const dispatch=useDispatch();
	const popularMovies = async ()=>{
		const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
		// console.log(json.results);
        dispatch(addPopularMovies(json.results));
	}
	useEffect(()=>{
		!popularMovie && popularMovies();
	},
	[]);
}
export default usePopularMovies;
