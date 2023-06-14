import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../utils/data";

const initialState = {
  games: [],
  allTimeBest: [],
  upcomingGames: [],
  newlyReleasedGames: [],
  sortInput: "",
};

export const setGames = createAsyncThunk("games/setGames", async () => {
  try {
    const response = await data.getGames();

    // const data = response.data.map((element, index) => ({
    //   ...element,
    //   price: index + Math.random(),
    //   liked: false,
    // }));

    // return data;
    return response;
  } catch (error) {
    console.log("Error fetching games:", error);
    throw error;
  }
});

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sortInput = action.payload;
    },
    reset: () => {
      return { ...initialState };
    },
    filterHighestRated: (state) => {
      const highest = state.games.filter((game) => game.rating >= 4.5);
      const topTen = highest.slice(0, 10);
      state.allTimeBest = topTen;
    },
    upcoming: (state) => {
      const currentDate = new Date();
      state.upcomingGames = state.games.filter(
        (game) => new Date(game.released_at) >= currentDate
      );
    },
  },
  newlyReleased: (state) => {
    const currentDate = new Date();
    const releaseDateThreshold = new Date().setMonth(
      currentDate.getMonth() - 1
    );
    const newestGames = releaseDateThreshold.slice(0, 10);
    state.newlyReleasedGames = state.games.filter(
      (game) => new Date(game.released_at) > newestGames
    );
  },
  extraReducers: (builder) => {
    builder.addCase(setGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export const { sort, reset, newlyReleased, upcoming, filterHighestRated } =
  dashboardSlice.actions;

export const selectReset = (state) => state.reset;
export const selectSort = (state) => state.sort;
export const selectNewlyReleased = (state) => state.newlyReleased;
export const selectUpcoming = (state) => state.upcoming;
export const selectHighestRated = (state) => state.filterHighestRated;

export default dashboardSlice.reducer;
