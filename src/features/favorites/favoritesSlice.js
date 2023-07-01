import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameLikes: [],
  deleteGame: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToLikes: (state, action) => {
      state.likes = [...state.likes, action.payload];
    },
    getLikes: (state, action) => {
      state.likes = action.payload;
    },
    removeLike: (state, action) => {
      const indexOf = state.likes.findIndex(
        (item) => item.liked === action.payload
      );
      console.log("the indexOf is:", indexOf);
      state.likes.splice(indexOf, 1);
    },

    likes: (state, action) => {
      const indexOfLike = state.games.findIndex(
        (game) => game.id === action.payload
      );
      const updatedGame = {
        ...state.games[indexOfLike],
        liked: !state.games[indexOfLike].liked,
      };
      state.games[indexOfLike] = updatedGame;
    },
  },
});

export const { addToLikes, getLikes, removeLikes } = favoritesSlice.actions;

export const selectLikes = (state) => state.gameLikes;
export const selectLikeToRemove = (state) => state.deleteGame;

export default favoritesSlice.reducer;
