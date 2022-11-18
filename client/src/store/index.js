import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./reducer/BlogSlice";
import { infoReducer } from "./reducer/InfoSlice";
import { orgReducer } from "./reducer/orgSlice";

export const store = configureStore({
	reducer: {
		info: infoReducer,
		orgReducer,
		blogs: blogReducer,
	},
});
