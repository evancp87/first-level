/* eslint-disable react/prop-types */

import React from "react";

const Controls = ({
  sortValue,
  searchError,
  setSelectedPlatform,
  resetFilters,
  searchValue,
  setSelectedGenre,
  platformNames,
  genreNames,
  selectedGenre,
  selectedPlatform,
  setSelectedSort,
  selectedSort,
  searchText,
}) => {
  // const handleAscendingReset = (e) => {
  //   setSelectedSort("Sort A - Z");
  // }

  // const handleGenreResets = (e) => {
  //   setSelectedGenre(e.target.value)
  //   setSelectedSort(" Filter games by genre");
  // }
  return (
    <>
      <div className="flex flex-col ">
        <div className="my-1.5 flex flex-row flex-wrap justify-center ">
          <select
            onInput={sortValue}
            value={selectedSort}
            // onChange={(e) => setSelectedSort(e.target.value)}
            className="max-w-xs max-w-xs select-bordered  select select-xs my-[1.5em] w-[250px]"
          >
            <option disabled selected>
              Sort A - Z
            </option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
            {/* <option value="Reset">Reset</option> */}
          </select>
          <select
            name="platform"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="max-w-xs max-w-xs select-bordered  select select-xs my-[1.5em] w-[250px]"
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
            {/* <option onChange={resetFilters} value="Reset">
              Reset
            </option> */}
          </select>
          <select
            name="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="max-w-xs max-w-xs select-bordered  select select-xs my-[1.5em] w-[250px]"
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
            {/* <option onChange={resetFilters} value="Reset">
              Reset
            </option> */}
          </select>
        </div>
        <div className="form-control  flex w-full  max-w-[80vw] justify-center">
          <label className="label">
            <span className="label-text">Search for games</span>
          </label>
          <input
            onChange={searchValue}
            value={searchText}
            type="text"
            placeholder="Search for games by title, genre or platform"
            className="max-w-xs input-bordered input my-[1.5em] w-full"
          />
          <ul>
            {searchError &&
              searchError.map((error, index) => (
                <li key={index}>
                  <p className="mb-4 text-logo"> {error.message}</p>
                </li>
              ))}
          </ul>
          <button
            value="reset"
            className="text-slate-100 h-[40px] max-w-[25%] rounded-full bg-logo"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
