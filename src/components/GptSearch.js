import React from 'react'

import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <><div className='fixed -z-10'>
    <img className='h-screen object-cover md:h-full'
    src={BG_URL}
    alt ="logo"
    />
    </div>
    <div className='pt-[30%] md:p-0'>
      
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>

  
  )
}

export default GptSearch
