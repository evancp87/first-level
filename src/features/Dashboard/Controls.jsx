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
  // controlled select/search components, including desc, asc, filtering by games console, filtering by genre and filtering by search query
  return (
    <>
      <div className="flex max-w-[80vw] flex-col  items-center">
        <div className="my-1.5 flex flex-row flex-wrap justify-center ">
          <select
            onInput={sortValue}
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="max-w-xs max-w-xs card-bg  select-bordered select select-xs my-[1.5em] w-[250px]"
          >
            <option disabled>Sort A - Z</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </select>
          <select
            name="platform"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="max-w-xs max-w-xs card-bg  select-bordered select select-xs my-[1.5em] w-[250px]"
          >
            <option disabled>Filter games by console</option>
            {platformNames &&
              platformNames.map((platformName, index) => (
                <option key={index} value={platformName}>
                  {platformName}
                </option>
              ))}
          </select>
          <select
            name="genre"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="max-w-xs max-w-xs card-bg  select-bordered select select-xs my-[1.5em] w-[250px]"
          >
            <option disabled>Filter games by genre</option>
            {genreNames &&
              genreNames.map((genreName, index) => (
                <option key={index} value={genreName}>
                  {genreName}
                </option>
              ))}
          </select>
        </div>
        <div className="form-control  flex w-full justify-center">
          <label className="label self-start">
            <span className="label-text">Search for games</span>
          </label>
          <input
            onChange={searchValue}
            value={searchText}
            type="text"
            placeholder="Search for games by title, genre or platform"
            className="focus-input max-w-xs card-bg input-bordered input my-[1.5em] w-full"
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
            className="active-btn text-slate-100 h-[40px] w-[25%] self-start rounded-full bg-logo duration-300 ease-in-out hover:scale-110"
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
