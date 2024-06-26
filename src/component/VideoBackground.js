import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
    const trailerId=useSelector(store=>store.movies?.trailerID);
    useMovieTrailer(movieId);
	return (
		<div className=" pt-24 md:pt-0 w-full">
			<iframe className=" w-full aspect-video"
				src={'https://www.youtube.com/embed/'+trailerId+'/?&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&&cc_load_policy=0&playlist='+trailerId}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				
				></iframe>
		</div>
	);
};

export default VideoBackground;
