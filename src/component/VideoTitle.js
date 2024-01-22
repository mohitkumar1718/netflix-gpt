import React from 'react'

export const VideoTitle = (movie) => {
    const {original_title, overview}=movie.movie;
   
  return (
    <div className='absolute w-full aspect-video pt-60 pl-20 px-10 bg-gradient-to-r from-black  text-white'>
        <h1 className='text-6xl font-bold mb-4 w-1/2'>{original_title}</h1>
        <p className='w-2/5 '>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white text-black w-24 p-2 rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 text-white bg-opacity-50 w-24 p-2 mx-5 rounded-lg hover:bg-opacity-30'>More Info</button>
        </div>
    </div>
  )
}
