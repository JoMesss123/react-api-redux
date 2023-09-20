const reducers = {
	addRecipe: (state, action) => {
		state.recipe = action.payload;
	}
}

export default reducers;