
import Header from './Header'
import useNowPlayingmovies from "../hooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {

    useNowPlayingmovies();


  return (
    <div>
      
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>

      {/* maincontainer 
          -vedioBackground
          -VedioTitle
          secondary container 
          -MovieList*/}
    </div>
  )
}

export default Browse
