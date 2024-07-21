import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingmovies = ()=>{
     //fetch data from TMDB API and update store
     const dispatch = useDispatch();

     const getNowPlayingMovies = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
              API_OPTIONS)
  
              const json = await data.json();
             
              dispatch(addNowPlayingMovies(json.results));
     }
     useEffect(()=>{
 getNowPlayingMovies();
     },[]);
    }

    export default useNowPlayingmovies;