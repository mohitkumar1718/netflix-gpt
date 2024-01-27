import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptSearchView:false,
        moviesResult:null,
        gptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearchView=true;
        },
        toggleGptSearchView2:(state,action)=>{
            state.showGptSearchView=false;
        },
        addGptMoviesResults:(state,action)=>{
            const {gptMovies,moviesResult}=action.payload
            state.moviesResult=moviesResult;
            state.gptMovies=gptMovies;
        }
    }
})
export const {toggleGptSearchView,addGptMoviesResults,toggleGptSearchView2}=gptSlice.actions;
export default gptSlice.reducer;