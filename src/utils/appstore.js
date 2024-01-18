
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slice";
const appStore = configureStore({
	reducer: {
		user: useReducer,
	},
});
export default appStore;
