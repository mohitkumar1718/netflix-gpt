import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const language=useSelector(store=>store.config);
    console.log(language)
    
  return (
    <div>
       <form onSubmit={(e)=>e.preventDefault()} action="" className='bg-black text-white w-1/2  p-2 flex ml-auto mr-auto rounded-lg justify-between'>
        <input className=' w-[80%] p-3 mr-2 rounded-lg text-black' type="text" placeholder={lang.language?.SearchPlaceholder} />
        <button className='w-[20%] p-3 bg-red-600 rounded-lg'>{lang.en.search}</button>
       </form>
    </div>
  )
}

export default GptSearchBar