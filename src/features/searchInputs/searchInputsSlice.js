import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlatforms, getGenres } from "../../utils/data";

const initialState = {
  platforms: [],
  genres: [],
};

export const setGenres = createAsyncThunk("inputs/getGenres", async () => {
  const response = await getGenres();

  return response;
});

export const setPlatforms = createAsyncThunk(
  "inputs/getPlatforms",
  async () => {
    const response = await getPlatforms();
    return response;
  }
);
export const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    resetSelectInputs: (state, action) => {
      state.platforms = initialState.platforms;
      state.genres = initialState.genres;
      // state.platforms = action.payload;
      // state.genres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setGenres.fulfilled, (state, action) => {
        const genreNames = action.payload.map((platform) => platform.name);
        const namesSlice = genreNames.slice(0, 14);
        state.genres = namesSlice;
      })
      .addCase(setPlatforms.fulfilled, (state, action) => {
        const platformNames = action.payload.map((platform) => platform.name);
        const namesSlice = platformNames.slice(0, 7);
        state.platforms = namesSlice;
      });
  },
});

export const { resetSelectInputs } = inputsSlice.actions;
export const selectGenres = (state) => state.inputs.genres;
export const selectPlatforms = (state) => state.inputs.platforms;

export default inputsSlice.reducer;
