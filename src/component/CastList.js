import React from 'react'
import CastCard from './CastCard'
const CastList = (credit) => {
  const cast=credit?.credit?.cast;
  return (
    // <div className='flex '>
    // <div className='flex '>
    // {console.log(credit)}
    // { cast?.map( (cast)=> cast?.profile_path &&    <CastCard key={cast?.id} photo={cast?.profile_path}/>)}
    // </div>
    // </div>
    <div className="px-6 pb-2">
            <h1 className="text-white text-lg md:text-3xl py-4 md:pl-4 ">CAST</h1>
			<div className="flex overflow-x-scroll h-72 no-scrollbar relative " >
				<div className="flex flex-shrink-0 ">
               { cast?.map( (cast)=> cast?.profile_path &&    <CastCard key={cast?.id} photo={cast?.profile_path} name={cast?.name}/>)}
					
				</div>
			</div>
            
		</div>
  )
}

export default CastList;