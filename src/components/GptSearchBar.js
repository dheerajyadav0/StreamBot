import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import {  useDispatch, useSelector } from 'react-redux'

import { API_OPTIONS, OPENAI_KEY } from '../utils/constants'

import { GoogleGenerativeAI } from '@google/generative-ai'
import { addGptMovieresult } from '../utils/Gptslice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
 

    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);

    //search movie in tmdb
    const searchMovieTMDB  = async(movie)=>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
      const json = await data.json()

      return json.results
    }
   const genAI = new GoogleGenerativeAI( OPENAI_KEY)
    const model = genAI.getGenerativeModel({model:"gemini-pro"});
    const handleGptSearchClick  = async () => { 
      console.log(searchText.current.value);

      const gptQuery = "Act as a Movie REcommendation system and suggest some movie for the Query "+searchText.current.value +".only give name of 5 movies, comma seperated .like the exapmle result given ahead . example Result: Gadar, Sholay,Don,Golaml,Gabbar"

      //make an api call to gpt api and get movie result
     const gptResult = await model.generateContent(gptQuery)
        const response= gptResult.response;
        const text = response.text();
        console.log(text);


        const gptMovies =text.split(",")

        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(addGptMovieresult({movieNames:gptMovies,movieResults:tmdbResults}))

    }




  return (
    <div className='md:pt-[10%] pt-[30%]  flex justify-center'>
      <form className='md:w-1/2 w-full bg-black grid grid-cols-12' 
      onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
         className='p-4 m-4 col-span-9 '
          type='text' 
          placeholder={lang[langKey].gptSearchPlaceholder}
          />

        
      <button 
      className='py-2 px-4 bg-red-700 text-white m-4 rounded-lg col-span-3'
    onClick={handleGptSearchClick}
     >
        {lang[langKey].search}
        </button>
      </form>
    </div>
  )
    }

export default GptSearchBar
