import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constant';
import { addGptMoviesResults } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const language=useSelector(store=>store.config.lang);
    const searchMovieTMDB=async (movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json= await data.json();
        return json.results;
    }

    const handleButtonClick=async ()=>{
        
        // console.log(searchText.current.value);
        const gptQuery="Act as a movies recommendation system and suggest or some movies for query"+ searchText.current.value+ ". only give me 5 movies , common seperated ike the example results give ahead . example result : Gadder , sholay , Don , Golmaal , Koi Mil Gaya"
        const getResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
          const gptMovies=getResult.choices[0]?.message?.content.split(",");

         const promiseArray =gptMovies.map(movie=>searchMovieTMDB(movie));
         // array of promise because searchMovieTMDB is async function
         const tmdbResults= await Promise.all(promiseArray);
        //  console.log(tmdbResults);
         dispatch(addGptMoviesResults({gptMovies:gptMovies,moviesResult:tmdbResults}));
    }
  return (
    <div>
       <form onSubmit={(e)=>e.preventDefault()} action="" className='bg-black text-white w-full md:w-1/2  p-2 flex ml-auto mr-auto rounded-lg justify-between'>
        <input ref={searchText} className=' w-[80%] p-3 mr-2 rounded-lg text-black' type="text" placeholder={lang[language].SearchPlaceholder} />
        <button onClick={handleButtonClick} className='w-[20%] p-3 bg-red-600 rounded-lg'>{lang[language].search}</button>
       </form>
    </div>
  )
}

export default GptSearchBar