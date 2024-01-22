import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
export const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	
	return (
		<div className="bg-black h-full">
			<Header />
			<MainContainer/>
			<SecondaryContainer/>
		</div>
	);
};
