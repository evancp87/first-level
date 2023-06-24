import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { validate } from "../../validation/index.js";
import GameCard from "../Game/GameCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSort,
  selectSearch,
  reset,
  sort,
  search,
  selectGames,
} from "./dashboardSlice";

import {
  selectGenres,
  selectPlatforms,
  setPlatforms,
  setGenres,
  resetSelectInputs,
} from "../searchInputs/searchInputsSlice.js";

const Search = () => {
  // searching and filtering-

  //  include num results
  // pagination
  const [searchError, setSearchError] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const searchInput = useSelector(selectSearch);
  const sortInput = useSelector(selectSort);
  const genreNames = useSelector(selectGenres);
  const platformNames = useSelector(selectPlatforms);

  // const platformNames = [...games.map((game) => game.console.platform.name)];
  const getInputs = useCallback(() => {
    dispatch(setPlatforms());
    dispatch(setGenres());
  }, [dispatch]);

  useEffect(() => {
    getInputs();
  }, [getInputs]);

  const resetFilters = (e) => {
    const { name, value } = e.target;
    if (value === "Reset") {
      if (name === "platform") {
        setSelectedPlatform("");
      } else if (name === "genre") {
        setSelectedGenre("");
      }
      dispatch(resetSelectInputs());
    }
  };

  const searchValue = async (e) => {
    console.log(e.target.value);

    const { value } = e.target;
    dispatch(search(value));
    const payload = { search: value };
    const res = await validate(payload);

    setSearchError(res);
  };

  const sortValue = (e) => {
    console.log(e.target.value);
    dispatch(sort(e.target.value));
  };

  // const platforms = games.map((game) => game.platforms);
  // const platformNames = platforms.map((platform) => platform.console.name);

  const filteredSearch = () => {
    let filteredList = [...games];
    // TODO: refactor and encapsulate queries
    if (searchInput) {
      console.log("is there a searchInput:", searchInput);
      filteredList = filteredList.filter((game) => {
        const gameQuery = game.name
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        const genreQuery = game.genres.some((genre) =>
          genre.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        const platformQuery = game.platforms.some((item) =>
          item.platform.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        return gameQuery || genreQuery || platformQuery;
      });
    }

    if (selectedPlatform) {
      filteredList = filteredList.filter((game) =>
        game.platforms.some((item) => item.platform.name === selectedPlatform)
      );
    }

    if (selectedGenre) {
      filteredList = filteredList.filter((game) =>
        game.genres.some((genre) => genre.name === selectedGenre)
      );
    }

    // sorting alphabetically ascending or descending
    switch (sortInput) {
      case "Asc":
        filteredList.sort((numOne, numTwo) =>
          numOne.name > numTwo.name ? 1 : -1
        );
        break;

      case "Desc":
        filteredList.sort((numOne, numTwo) =>
          numOne.name > numTwo.name ? -1 : 1
        );
        break;

      // case "Reset":
      //   filteredList = [...games];
      //   dispatch(reset());
      //   break;

      default:
        filteredList;
    }

    return filteredList;
  };

  const filteredGames = filteredSearch();
  return (
    <section className="flex flex-col items-center">
      {/* <input type="text" onInput={searchValue} /> */}
      <div className="flex flex-col items-center">
        <div className="flex flex-row flex-wrap justify-center my-px gap-[0.5rem]">
          <select
            onInput={sortValue}
            className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
          >
            <option disabled selected>
              Sort A - Z
            </option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
            <option value="Reset">Reset</option>
          </select>
          <select
            name="platform"
            onInput={(e) => setSelectedPlatform(e.target.value)}
            className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
          >
            <option disabled selected>
              Filter games by console
            </option>
            {platformNames &&
              platformNames.map((platformName, index) => (
                <option
                  key={index}
                  // value="Asc"
                  value={platformName}
                >
                  {platformName}
                </option>
              ))}
            <option onChange={resetFilters} value="Reset">
              Reset
            </option>
          </select>
          <select
            name="genre"
            onInput={(e) => setSelectedGenre(e.target.value)}
            className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
          >
            <option disabled selected>
              Filter games by genre
            </option>
            {genreNames &&
              genreNames.map((genreName, index) => (
                <option key={index} value={genreName}>
                  {genreName}
                </option>
              ))}
            <option onChange={resetFilters} value="Reset">
              Reset
            </option>
          </select>
        </div>
        <div className="form-control flex justify-center max-w-[80vw] w-full">
          <label className="label">
            <span className="label-text">Search for games</span>
          </label>
          <input
            onInput={searchValue}
            type="text"
            placeholder="Search for games by title, genre or platform"
            className="input input-bordered w-full max-w-xs"
          />
          <ul>
            {searchError &&
              searchError.map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
          </ul>
        </div>
      </div>

      <div>
        <ul>
          {filteredGames.length === 0 && <p>no results found</p>}
          {filteredGames &&
            filteredGames.map((game) => (
              <GameCard key={game.id} game={game} liked={game.liked} />
            ))}
          <div className="join grid grid-cols-2">
            <button className="join-item btn btn-outline">Previous page</button>
            <button className="join-item btn btn-outline">Next</button>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Search;
