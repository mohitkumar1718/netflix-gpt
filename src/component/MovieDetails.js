import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, BG_IMG, IMG_URL_CDN } from "../utils/constant";
import Header from "./Header";
import MovieList from "./MovieList";
import useMovieDetails from "../hooks/useMovieDetails";
import CastList from "./CastList";
export const MovieDetails = () => {
	const id = useParams();
	const {details,similarMovie,credit}=useMovieDetails(id.movieID);
    // console.log(credit)
	const director=credit?.crew?.filter(crew=>crew?.job==="Director");
	const writer=credit?.crew?.filter(crew=>crew?.job==="Story" ||crew?.job==="Screenplay" || crew?.job==="Characters");
	// console.log(writer)
	// console.log(director);
	const writername=writer?.map(writer=> writer.name);
	// console.log(writername);
	return (<>
            
			<Header />
			
			<div className='bg-black  lg:bg-opacity-70 text-white -z-10'>
               <div>
               <img
				className=' hidden lg:block lg:absolute md:h-full w-full  object-cover -z-10'
				src={BG_IMG + details?.backdrop_path}
				alt='background img'
			/>
			<img
				className=' hidden sm:block lg:hidden p-2 rounded-lg sm:pt-[15%] md:pt-[10%] '
				src={BG_IMG + details?.backdrop_path}
				alt='background img'
			/>
				<div className='  pt-[30%] sm:pt-0 flex  flex-col  lg:flex-row lg:pt-[10%] lg:ml-40 '>
				
					<img
						className=' w-80 sm:w-60 sm:hidden lg:block  lg:w-[300px] rounded-lg mx-auto lg:mx-0'
						src={IMG_URL_CDN + details?.poster_path}
						alt='poster'
					/>
					<div className='ml-4 p-4  md:w-[800px]'>
						<h1 className='text-3xl md:text-5xl pb-4'>{details?.original_title}</h1>
						<p className='text-base md:text-lg'>{details?.overview}</p>
						<h1 className='text-xl md:text-2xl mt-4'>Status : {details?.status}</h1>
						<h1 className='text-xl md:text-2xl mt-4'>Runtime : {details?.runtime} min</h1>
						{director && <h1 className='text-xl md:text-2xl mt-4'>Director : {director[0]?.name} </h1>}
						<span className='text-xl md:text-2xl mt-4'>Writer: </span><span>{writername?.join(", ")}</span>

					</div>
				</div>
                </div>
			</div>
          <div className="bg-black text-white">
			<div className="">
			<CastList credit={credit}/>
			</div>
          { similarMovie &&  <MovieList title="Similar Movies" movies={similarMovie}/>}
          </div>	
    </>
	);
};
