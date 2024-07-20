import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


//fetching the  trailer ved and updating the store with trailer ved data

const VedioBackground = ({movieId}) => {
    const trailerVedio = useSelector(store => store.movies?.trailerVedio);

    useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe
       className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVedio?.key+"&autoplay=1&mute=1"}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
    
      ></iframe>
    </div>
  );
};

export default VedioBackground;
