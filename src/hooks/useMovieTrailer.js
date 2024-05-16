import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer=(movieId)=>{
    
    const dispatch=useDispatch();
	const getMovieVideo = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}/videos?language=en-US`,API_OPTIONS);
		const json = await data.json();

		const trailerVideos = json.results?.filter(
			(video) => video.type === "Trailer",
		);
		const trailer = trailerVideos ? trailerVideos[0] : json.results[0];
        dispatch(addMovieTrailer(trailer.key));
		
	};
	useEffect(() => {
		getMovieVideo();
	}, []);
}

export default useMovieTrailer;