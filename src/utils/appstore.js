import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReduces from "./movieSlice"
const appStore = configureStore({
	reducer: {
		user: useReducer,
		movies:moviesReduces,
	},
});
export default appStore;
