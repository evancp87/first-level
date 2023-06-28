import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGameDetail,
  getScreenshots,
  getGameTrailers,
} from "../../utils/data";

const initialState = {
  detail: {},
  screenshots: [],
  trailers: [],
};

export const getGame = createAsyncThunk("games/getGame", async (slug) => {
  try {
    const gameDetail = await getGameDetail(slug);

    const price = Math.floor(Math.random() * 11) + 50;

    // Add the 'price' property to the game detail
    gameDetail.price = price;

    return gameDetail;
  } catch (error) {
    console.log("There was an error getting the game details:", error);
  }
});

export const getGameScreenshots = createAsyncThunk(
  "games/getScreenshots",
  async (slug) => {
    try {
      const screenshots = await getScreenshots(slug);
      return screenshots;
    } catch (error) {
      console.log("There was an error getting the game details:", error);
    }
  }
);

export const getTrailers = createAsyncThunk(
  "games/getTrailers",
  async (slug) => {
    try {
      const trailers = await getGameTrailers(slug);
      return trailers;
    } catch (error) {
      console.log("There was an error getting the game details:", error);
    }
  }
);

export const gameDetailsSlice = createSlice({
  name: "gameDetails",
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
  extraReducers: (builder) => {
    builder
      .addCase(getGame.fulfilled, (state, action) => {
        console.log("the payload is:", action.payload);
        state.detail = action.payload;
      })
      .addCase(getTrailers.fulfilled, (state, action) => {
        state.trailers = action.payload;
      })
      .addCase(getGameScreenshots.fulfilled, (state, action) => {
        state.screenshots = action.payload;
      });
  },
});

export const { search, sort, reset } = gameDetailsSlice.actions;

export const selectGameDetail = (state) => state.games.detail;
export const selectScreenshots = (state) => state.games.screenshots;
export const selectTrailers = (state) => state.games.trailers;

export default gameDetailsSlice.reducer;
