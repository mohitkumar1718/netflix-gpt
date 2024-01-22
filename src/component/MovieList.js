import React from "react";
import { MovieCard } from "./MovieCard";

const MovieList = ({title, movies }) => {
	return (
        <div   >
            <h1 className="text-white text-3xl py-4 no-scrollbar scrollbar-hide">{title}</h1>
			<div className="flex overflow-x-scroll no-scrollbar " >
				<div className="flex  ">
               { movies.map(movie=> <MovieCard key={movie.id} photoUrl={movie.backdrop_path} />)}
					
				</div>
			</div>
            
		</div>
        
	);
};

export default MovieList;
