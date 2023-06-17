const api = "b27a148777114f578b36079d29688b34";
import axios from "axios";
// game data

export const getGames = async () => {
  try {
    const { data } = await axios.get(
      ` https://api.rawg.io/api/games?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// genres
export const getGenres = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/genres?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// screenshots
export const getScreenshots = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/:game_pk/screenshots?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// links to stores that sell the game

export const getLinksToStores = async () => {
  try {
    const { data } = await axios.get(
      ` https://api.rawg.io/api/games/:game_pk/stores?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// Get details of the game.

export const getGameDetail = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/:id?key=${api}`
    );
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

// Get a list of game trailers.

export const getGameTrailers = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/:id/movies?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// favorites

export const getFavorites = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/{game_pk}/screenshots}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// Ratings

export const getRatings = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/{game_pk}/screenshots`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};
