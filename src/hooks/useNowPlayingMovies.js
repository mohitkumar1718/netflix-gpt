import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
	const nowPlayingMovies = async ()=>{
		const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
		// console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
	}
	useEffect(()=>{
		nowPlayingMovies();
	},
	[]);
}
export default useNowPlayingMovies;
