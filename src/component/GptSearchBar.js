import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'

import { API_OPTIONS, url } from '../utils/constant';
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
        const gptQuery="Act as a movies recommendation system and suggest or some movies for query"+ searchText.current.value+ ". only give me 5 movies , common separated don't give year just need movie name don,t give any other information other then name like the example results give ahead . example result : Gadder , sholay , Don , Golmaal , Koi Mil Gaya"
        
        
        const options = {
          method: 'POST',
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KAY,
            'x-rapidapi-host': 'openai-api-gpt-3-5-turbo.p.rapidapi.com',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'mistral-7b',
            messages: [
              {
                role: 'assistant',
                content: 'Your are good at coding. Your name is Github Copilot.'
              },
              {
                role: 'user',
                content: gptQuery
              }
            ],
            temperature: 0.5,
            top_p: 0.95,
            max_tokens: -1,
            use_cache: false,
            stream: false
          })
        };
        
        
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          const gptMovies=result?.choices[0]?.message?.content.split(",");

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