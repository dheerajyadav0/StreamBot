import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name :"movies",
    initialState :{
    nowPlayingMovies:null,
    popularMovies:null,
    upcomingMovies:null,
    topratedMovies:null,
    trailerVedio:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVedio: (state, action)=>{
            state.trailerVedio= action.payload;
        }
    }
})
export const {addNowPlayingMovies , addTrailerVedio,addPopularMovies,addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;