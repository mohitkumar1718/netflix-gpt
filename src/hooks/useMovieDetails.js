import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieDetails=(id)=>{
    
    const [details, setDetails] = useState(null);
    const [credit, setCredits] = useState(null);
    const [similarMovie,setSimilarMovie]=useState(null);
    
	const moviesData = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
			API_OPTIONS,
		);
		const json = await data.json();
		// console.log(json);
		setDetails(json);
	};
	const movieCredit = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
			API_OPTIONS,
		);
		const json = await data.json();
		// console.log(json);
		setCredits(json);
	};
    const similarMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + id+ "/similar?language=en-US",
			API_OPTIONS,
		);
		const json = await data.json();
		// console.log(json);
		setSimilarMovie(json.results);
        // console.log(similarMovie);
	};

	useEffect(() => {
		moviesData()
        similarMovies()
		movieCredit();
	},[]);
    return {details,similarMovie,credit};
}

export default useMovieDetails;