
import Header from './Header'
import useNowPlayingmovies from "../hooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch =useSelector(store=>store.gpt.showGptSearch)

    useNowPlayingmovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    


  return (
    <div>
      
      <Header/>
      {

        showGptSearch?(
        <GptSearch/>
        ) : (
        <>
        <Maincontainer/>
        <Secondarycontainer/>
        </>
        )
      }
     

      {/* maincontainer 
          -vedioBackground
          -VedioTitle
          secondary container 
          -MovieList*/}
    </div>
  )
}

export default Browse
