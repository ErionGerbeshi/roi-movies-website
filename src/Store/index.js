import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from "../Reducers/FavoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducers,
  },
});

export default store;
