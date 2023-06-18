import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGames } from "../../utils/data";

const initialState = {
  games: [],
  allTimeBest: [],
  upcomingGames: [],
  newlyReleasedGames: [],
  sortInput: "",
};

export const setGames = createAsyncThunk("games/setGames", async () => {
  try {
    const response = await getGames();

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
    newlyReleased: (state) => {
      const currentDate = new Date();
      const releaseDateThreshold = new Date().setMonth(
        currentDate.getMonth() - 1
      );
      const newestGames = state.games.filter(
        (game) => new Date(game.released_at) > releaseDateThreshold
      );
      state.newlyReleasedGames = newestGames.slice(0, 10);
    },
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
export const selectSort = (state) => state.sortInput;
export const selectNewlyReleased = (state) => state.newlyReleasedGames;
export const selectUpcoming = (state) => state.upcomingGames;
export const selectHighestRated = (state) => state.dashboard.allTimeBest;

export default dashboardSlice.reducer;
