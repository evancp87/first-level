import { getCachedGames, cacheGames } from "./helpers";

const api = "b27a148777114f578b36079d29688b34";

// const api = import.meta.env.API_KEY;

import axios from "axios";
// game data

export const getGames = async () => {
  try {
    const cachedGames = getCachedGames();

    if (
      cachedGames !== null &&
      cachedGames !== undefined &&
      cachedGames.length > 0
    ) {
      console.log("Fetching games from cache...");
      return cachedGames;
    } else {
      let results = [];
      for (let i = 0; i < 2; i++) {
        const { data } = await axios.get(
          ` https://api.rawg.io/api/games?key=${api}&page=${i + 1}`
        );

        results = [...results, ...data.results];
      }
      results = results.map((element, index) => ({
        ...element,

        liked: false,
      }));
      console.log("Fetching games from API...");
      cacheGames(results);
      return results;
    }
  } catch (error) {
    console.log("error:", error);
  }
};

// export const getGames = async () => {
//   try {
//     const { data } = await axios.get(
//       ` https://api.rawg.io/api/games?key=${api}`
//     );
//     // return data.results;

//     const results = data.results.map((element, index) => ({
//       ...element,

//       liked: false,
//     }));

//     return results;
//   } catch (error) {
//     console.log("error:", error);
//   }
// };

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

export const getPlatforms = async () => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/platforms?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};
// screenshots
export const getScreenshots = async (game_pk) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${game_pk}/screenshots?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// links to stores that sell the game

export const getLinksToStores = async (game_pk) => {
  try {
    const { data } = await axios.get(
      ` https://api.rawg.io/api/games/${game_pk}/stores?key=${api}`
    );
    return data.results;
  } catch (error) {
    console.log("error:", error);
  }
};

// Get details of the game.

export const getGameDetail = async (slug) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${slug}?key=${api}`
    );
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

// Get a list of game trailers.

export const getGameTrailers = async (slug) => {
  try {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games/${slug}/movies?key=${api}`
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
