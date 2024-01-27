import React from "react";
import { MovieCard } from "./MovieCard";


const MovieList = ({title, movies }) => {
	
	return (
        <div className="px-6 pb-2">
            <h1 className="text-white text-lg md:text-3xl py-4 md:pl-4 no-scrollbar scrollbar-hide">{title}</h1>
			<div className="flex overflow-x-scroll h-72 no-scrollbar relative " >
				<div className="flex">
               { movies.map(movie=> (
				<MovieCard key={movie.id} movie={movie} />))}
					
				</div>
			</div>
            
		</div>
        
	);
};

export default MovieList;
