import { createSlice } from "@reduxjs/toolkit"
import reducers from './recipeReducers';

const recipeSlice = createSlice({
	name: "recipe",
	initialState: {
		recipe: [],
	},
	reducers: reducers,
})

export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;