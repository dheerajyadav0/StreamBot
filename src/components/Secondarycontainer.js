import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const movies = useSelector(store=>store.movies);

  return( 
     movies.nowPlayingMovies && (
    <div className=' bg-black'>
        <div className=' pl-12 -mt-52 relative z-20'>
        <MovieList title ={"NowPlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title ={"Popular"} movies={movies.PopularMovies} />

<MovieList title ={"Top Rated"} movies={movies.TopRatedMovies} />
<MovieList title ={"Upcoming "} movies={movies.UpcomingMovies} />

</div>

      {/* 
      movielist - popular
         moviecards
      movielist - trending
      movielist - now playing
      movielist - horror 
      */}
    </div>
  ))
}

export default Secondarycontainer
