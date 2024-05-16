import React from 'react'

export const VideoTitle = (movie) => {
    const {original_title, overview}=movie.movie;
   
  return (
    <div className='absolute w-full aspect-video pt-60 pb-60 md:pt-52  pl-10 md:pl-20 px-10 bg-gradient-to-r from-black  text-white'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-full md:w-1/2'>{original_title}</h1>
        <p  className=' hidden lg:inline-block w-2/5 '>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white text-black md:w-24 w-20 md:p-2 p-1 rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-500 text-white bg-opacity-50 md:w-24 w-20 md:p-2 p-1 mx-5 rounded-lg hover:bg-opacity-30'>More Info</button>
        </div>
    </div>
  )
}
