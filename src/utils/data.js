import { getCachedGames, cacheGames } from "./helpers";

const api = "b27a148777114f578b36079d29688b34";

import axios from "axios";
// game data

export const getGames = async () => {
  try {
    // caching api call so doesn't have to be repeated if games are in cache
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
      // ierates over paginated games data
      for (let i = 0; i < 30; i++) {
        const { data } = await axios.get(
          ` https://api.rawg.io/api/games?key=${api}&page=${i + 1}`
        );

        results = [...results, ...data.results];
      }
      results = results.map((element, index) => ({
        ...element,
        // sets liked property on each game
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

export const getGamesByDate = async (startDate, endDate) => {
  try {
    // Will take a start date and end date at point of dispatch to the store
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&key=${api}`
    );
    // gets games within date range that have rating of over 3.5. I found 4 and 4.5 too narrow
    const filteredResults = data.results.filter((game) => {
      return game.rating >= 3.5;
    });
    const results = filteredResults.slice(0, 10);
    return results;
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

// platform names
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

// Get details of a single game.

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

// Get a list of game trailers. Nb only found one game so far with a trailer - GTA V

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
