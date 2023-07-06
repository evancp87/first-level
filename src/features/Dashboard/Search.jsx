import React, { useState, useEffect, useCallback, useRef } from "react";
import { validate } from "../../validation/index.js";
import GameCard from "../Game/GameCard";
import { useDispatch, useSelector } from "react-redux";
import Controls from "./Controls.jsx";
import { useHandleLikes } from "../../utils/hooks/localStorage.jsx";

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
} from "../searchInputs/searchInputsSlice.js";

const Search = () => {
  // searching and filtering-

  //  include num results
  // pagination
  const [searchError, setSearchError] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const searchInput = useSelector(selectSearch);
  const sortInput = useSelector(selectSort);
  const genreNames = useSelector(selectGenres);
  const platformNames = useSelector(selectPlatforms);
  const { likes, handleLikes } = useHandleLikes();
  const inputRef = useRef(null);

  // const platformNames = [...games.map((game) => game.console.platform.name)];
  const getInputs = useCallback(() => {
    dispatch(setPlatforms());
    dispatch(setGenres());
  }, [dispatch]);

  useEffect(() => {
    getInputs();
  }, [getInputs]);

  useEffect(() => {
    const filteredGames = filteredSearch();
    // Calculate total pages
    setTotalPages(Math.ceil(filteredGames.length / 10));
    setCurrentPage(1);
  }, [searchInput, selectedPlatform, selectedGenre, sortInput]);

  const [selectedSort, setSelectedSort] = useState("Filter games by console");
  const handlePlatformResets = () => {
    setSelectedGenre("");
    setSelectedPlatform("");
    setSelectedSort("");
    setSearchText("");
  };
  const resetFilters = () => {
    // to reset filteredList
    dispatch(reset());

    // to reset inputs
    handlePlatformResets();
  };

  const searchValue = async (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
    const { value } = e.target;
    dispatch(search(value));
    const payload = { search: value };
    const res = await validate(payload);

    setSearchError(res);
  };

  const sortValue = (e) => {
    console.log(e.target.value);
    dispatch(sort(e.target.value));
    setSelectedSort(e.target.value);
  };

  const filteredSearch = () => {
    let filteredList = [...games];

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
      //   dispatch(resetSelectInputs());
      //   break;

      default:
        filteredList;
    }
    // pagination

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedGames = filteredList.slice(startIndex, endIndex);

    return paginatedGames;
    // return filteredList;
  };

  const filteredGames = filteredSearch();
  return (
    <section className="flex flex-col items-center">
      {/* <input type="text" onInput={searchValue} /> */}
      <Controls
        sortValue={sortValue}
        searchError={searchError}
        setSelectedPlatform={setSelectedPlatform}
        resetFilters={resetFilters}
        searchValue={searchValue}
        setSelectedGenre={setSelectedGenre}
        platformNames={platformNames}
        genreNames={genreNames}
        selectedGenre={selectedGenre}
        selectedPlatform={selectedPlatform}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        searchText={searchText}
        setSearchText={setSearchText}
        inputRef={inputRef}
      />

      <div className="w-full">
        <ul>
          {filteredGames.length === 0 && (
            <div className=" flex h-96 items-center justify-center">
              <p className="text-4xl">No results found</p>
            </div>
          )}

          {filteredGames &&
            filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                liked={game.liked}
                handleLikes={handleLikes}
              />
            ))}
        </ul>
        <div className="join my-[3em] grid grid-cols-2  pe-[1em] ps-[1em]">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1 || filteredGames.length === 0}
            className="btn-outline join-item btn"
          >
            Previous page
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage > totalPages || filteredGames.length === 0}
            className="btn-outline join-item btn"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
