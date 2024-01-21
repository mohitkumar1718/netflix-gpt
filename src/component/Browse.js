import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

export const Browse = () => {
    useNowPlayingMovies();
	return (
		<div>
			<Header />
		</div>
	);
};
