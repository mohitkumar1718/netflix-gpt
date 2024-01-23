import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptSearchView:false,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearchView=!state.showGptSearchView;
        }
    }
})
export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;