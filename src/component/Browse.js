import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import { GptSearch } from "./GptSearch";
export const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	const showGptSearchVies=useSelector(store=>store.gpt?.showGptSearchView);
	return (
		<div className="bg-black h-full">
			<Header />
			{showGptSearchVies?<GptSearch/>: <>
			<MainContainer/>
			<SecondaryContainer/>
			</>}
			
		</div>
	);
};
