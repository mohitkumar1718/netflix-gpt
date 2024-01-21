import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
export const Browse = () => {

	const nowPlayingMovies = async ()=>{
		const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
		console.log(json.results);
	}
	useEffect(()=>{
		nowPlayingMovies();
	},
	[]);
	return (
		<div>
			<Header />
		</div>
	);
};
