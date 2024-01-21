import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = (id) => {
    const [trailerKey,setTrailerKey]=useState(null);
	const getMovieVideo = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/955916/videos?language=en-US",
			API_OPTIONS,
		);
		const json = await data.json();
		// console.log(json);

		const trailerVideos = json.results.filter(
			(video) => video.type === "Trailer",
		);
		const trailer = trailerVideos ? trailerVideos[0] : json.results[0];
        setTrailerKey(trailer.key);
		console.log(trailer);
	};
	useEffect(() => {
		getMovieVideo();
	}, []);
	return (
		<div>
			<iframe
				src={'https://www.youtube.com/embed/'+ trailerKey}
				title='YouTube video player'
				
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				></iframe>
		</div>
	);
};

export default VideoBackground;
