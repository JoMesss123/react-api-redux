import { configureStore } from '@reduxjs/toolkit'
export default configureStore({
 reducer: {
    recette: recetteReducer,
 },
});
