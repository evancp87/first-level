import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGames } from "../../utils/data";

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
    search: (state, action) => {
      state.searchInput = action.payload;
    },
    reset: (state) => {
      state.games = initialState.games;
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
    addToLikes: (state, action) => {
      state.likes = [...state.likes, action.payload];
    },
    // getLikes: (state, action) => {
    //   state.likes = action.payload;
    // },
    removeLike: (state, action) => {
      const indexOf = state.games.findIndex(
        (game) => game.id === action.payload
      );
      console.log("the indexOf is:", indexOf);
      state.games.splice(indexOf, 1);
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
    builder.addCase(setGames.fulfilled, (state, action) => {
      state.games = action.payload;
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
export const selectNewlyReleased = (state) => state.newlyReleasedGames;
export const selectUpcoming = (state) => state.upcomingGames;
export const selectHighestRated = (state) => state.dashboard.allTimeBest;
export const selectGames = (state) => state.dashboard.games;
export const selectLikes = (state) => state.dashboard.gameLikes;
// export const selectToggleLikes = (state) => state.dashboard.
export const selectRating = (state) => state.dashboard.ratings;
export const selectRemoveLikes = (state) => state.dashboard.removeGameLikes;

export default dashboardSlice.reducer;
