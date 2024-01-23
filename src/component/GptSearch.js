import React from 'react'
import GptSearchBar from './GptSearchBar'
import { GptSearchResult } from './GptsearchResult'
import { BG_URL } from '../utils/constant'

export const GptSearch = () => {
  return (
    
        <div className=' w-full h-full'>
        <img className='w-full h-full absolute -z-10' src={BG_URL} alt="" />
        <div className='  w-full pt-[10%] absolute '>
        <GptSearchBar/>
        <GptSearchResult/>
        </div>
       </div>
  )
}
