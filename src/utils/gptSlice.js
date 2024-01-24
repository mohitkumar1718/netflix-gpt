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
            state.showGptSearchView=!state.showGptSearchView;
        },
        addGptMoviesResults:(state,action)=>{
            const {gptMovies,moviesResult}=action.payload
            state.moviesResult=moviesResult;
            state.gptMovies=gptMovies;
        }
    }
})
export const {toggleGptSearchView,addGptMoviesResults}=gptSlice.actions;
export default gptSlice.reducer;