import React from 'react'
import GptSearchBar from './GptSearchBar'
import { GptSearchResult } from './GptsearchResult'
import { BG_URL } from '../utils/constant'
import Header from './Header'

export const GptSearch = () => {
  return (
        
        <div className=''>
        <Header/>
        <img className=' h-full object-cover md:h-fit  md:w-full fixed -z-10' src={BG_URL} alt="" />
        <div className=' pt-[40%] w-full md:pt-[10%] absolute '>
        <GptSearchBar/>
        <GptSearchResult/>
        </div>
       </div>
  )
}
