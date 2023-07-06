import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGames, getGamesByDate } from "../../utils/data";

const initialState = {
  games: [],
  allTimeBest: [],
  upcomingGames: [],
  newlyReleasedGames: [],
  sortInput: "",
  searchInput: "",
  gameLikes: [],
  removeGameLike: {},
  ratings: [],
};

export const setGames = createAsyncThunk("games/setGames", async () => {
  try {
    const response = await getGames();
    return response;
  } catch (error) {
    console.log("Error fetching games:", error);
    throw error;
  }
});

export const setGamesByDate = createAsyncThunk(
  "games/setGamesDate",
  async ({ startDate, endDate }) => {
    try {
      const response = await getGamesByDate(startDate, endDate);

      return response;
    } catch (error) {
      console.log("Error fetching games:", error);
      throw error;
    }
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sortInput = action.payload;
    },
    search: (state, action) => {
      state.searchInput = action.payload;
    },
    reset: (state) => {
      state.sortInput = initialState.sortInput;
      state.searchInput = initialState.searchInput;
    },
    filterHighestRated: (state) => {
      if (state.games && state.games.length) {
        const highest = state.games.filter((game) => game.rating >= 4.5);
        const topTen = highest.slice(0, 10);
        state.allTimeBest = topTen;
      }
    },

    gameLikes: (state, action) => {
      const indexOfLike = state.games.findIndex(
        (game) => game.id === action.payload
      );
      const updatedGame = {
        ...state.games[indexOfLike],
        liked: !state.games[indexOfLike].liked,
      };
      state.games[indexOfLike] = updatedGame;

      //   to ensure that the changes are reflected in different components
      const highest = state.games.filter((game) => game.rating >= 4.5);
      const topTen = highest.slice(0, 10);
      state.allTimeBest = topTen;
    },

    rating: (state, action) => {
      const indexOfRating = state.games.findIndex(
        (game) => game.id === action.payload
      );
      const updatedRating = {
        ...state.games[indexOfRating],
        rated: (state.games[indexOfRating] += action.payload),
      };
      state.games[indexOfRating] = updatedRating;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setGames.fulfilled, (state, action) => {
        state.games = action.payload;
      })
      .addCase(setGamesByDate.fulfilled, (state, action) => {
        state.newlyReleasedGames = action.payload;
      });
  },
});

export const {
  sort,
  reset,
  search,
  newlyReleased,
  upcoming,
  filterHighestRated,
  addToLikes,
  getLikes,
  gameLikes,
  removeLike,
  rating,
} = dashboardSlice.actions;

export const selectReset = (state) => state.reset;
export const selectSort = (state) => state.dashboard.sortInput;
export const selectSearch = (state) => state.dashboard.searchInput;
export const selectHighestRated = (state) => state.dashboard.allTimeBest;
export const selectGames = (state) => state.dashboard.games;
export const selectLikes = (state) => state.dashboard.gameLikes;
export const selectUpcoming = (state) => state.dashboard.upcomingGames;
export const selectNewReleases = (state) => state.dashboard.newlyReleasedGames;

export const selectRating = (state) => state.dashboard.ratings;
export const selectRemoveLikes = (state) => state.dashboard.removeGameLikes;

export default dashboardSlice.reducer;
