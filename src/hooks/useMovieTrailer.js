import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{

    const dipatch = useDispatch();

   
    //fetch trailer vedio
  
    const getMoviesVedios = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+
        "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      
  
      const filterData = json.results.filter((vedio) => vedio.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      
    
      dipatch(addTrailerVedio(trailer));
    };
    useEffect(() => {
      getMoviesVedios();
    }, []);
}
export default useMovieTrailer;