import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

export const Browse = () => {
    useNowPlayingMovies();

	return (
		<div className="bg-black h-full">
			<Header />
			<MainContainer/>
			<SecondaryContainer/>
		</div>
	);
};
