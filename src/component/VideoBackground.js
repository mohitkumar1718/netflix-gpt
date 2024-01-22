import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
    const trailerId=useSelector(store=>store.movies?.trailerID);
    useMovieTrailer(movieId);
	return (
		<div className="w-full">
			<iframe className="w-full aspect-video"
				src={'https://www.youtube.com/embed/'+trailerId+'/?&autoplay=1&mute=1&loop=1&playlist='+trailerId}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
				></iframe>
		</div>
	);
};

export default VideoBackground;
