import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedGames: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchInput = action.payload;
    },
    sort: (state, action) => {
      state.sortInput = action.payload;
    },
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { search, sort, reset } = favoritesSlice.actions;

export const selectSearch = (state) => state.controls.searchInput;
export const selectSort = (state) => state.controls.sortInput;

export default favoritesSlice.reducer;
