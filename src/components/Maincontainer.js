import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle'
import VedioBackground from './VedioBackground'


const Maincontainer = () => {
    //o get the data from redux store
const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies ===null) return;

const mainMovie = movies[0];


const {original_title, overview,id} = mainMovie
;
  return (
    <div>
      {/* need 2 domponent vedio background and vedio title */}
      <VedioTitle title={original_title} overview={overview}/>
      <VedioBackground movieId={id}/>
    </div>
  )
}

export default Maincontainer
