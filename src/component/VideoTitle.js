import React from 'react'

export const VideoTitle = (movie) => {
    const {original_title, overview}=movie.movie;
   
  return (
    <div className='pt-72 ml-10 px-10'>
        <h1 className='text-6xl font-bold py-4'>{original_title}</h1>
        <p className='w-2/5 '>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white text-black w-24 p-2 rounded-lg'>Play</button>
            <button className='bg-white text-black w-24 p-2 mx-5 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}
