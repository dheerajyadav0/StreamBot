import React from 'react'

import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovieSuggestion from './GptMovieSuggestions'

const GptSearch = () => {
  return (

    <div>
      <div className='fixed -z-10'>
      <img
      src={BG_URL}
      alt ="logo"
      />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
