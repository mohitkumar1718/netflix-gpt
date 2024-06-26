import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies=()=>{
	const upcomingMovie=useSelector(store=>store.movies.nowPlayingMovies);

    const dispatch=useDispatch();
	const upcomingMovies = async ()=>{
		const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
		// console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
	}
	useEffect(()=>{
		!upcomingMovie && upcomingMovies();
	},
	[]);
}
export default useUpcomingMovies;
