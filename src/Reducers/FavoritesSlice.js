import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorites: (state, action) => {
      if (state.some((favMovie) => favMovie.imdbID === action.payload.imdbID)) {
        return state;
      }

      return [...state, action.payload];
    },
    removeFavorites: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload.imdbID);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
