const Controls = ({
  sortValue,
  searchError,
  setSelectedPlatform,
  resetFilters,
  searchValue,
  setSelectedGenre,
  platformNames,
  genreNames,
}) => {
  return (
    <>
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
    </>
  );
};

export default Controls;
