import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";

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

const Search = () => {
  // searching and filtering-

  //  include num results
  // pagination
  //
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const searchInput = useSelector(selectSearch);
  const sortInput = useSelector(selectSort);

  // const platformNames = [...games.map((game) => game.console.platform.name)];

  const searchValue = (e) => {
    console.log(e.target.value);
    dispatch(search(e.target.value));
  };

  const sortValue = (e) => {
    console.log(e.target.value);
    dispatch(sort(e.target.value));
  };

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

    // sorting alphabetically ascending or descending

    // switch (sortInput) {
    //   case "Asc":
    //   filteredList.sort((numOne, numTwo) =>
    //   numOne.name > numTwo.name ? 1 : -1
    // );
    //     break;

    //   case "Desc":
    //   filteredList.sort((numOne, numTwo) =>
    // numOne.name > numTwo.name ? -1 : 1
    // );
    //     break;

    //   case "Reset":
    //dispatch(reset());
    //     break;
    //   case "genre":
    //dispatch(reset());
    //     break;
    //   case "platform":
    //dispatch(reset());
    //     break;

    //   case "genre":
    //dispatch(reset());
    //     break;

    //   default:
    //     filteredList;
    // }
    if (sortInput === "Asc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.name > numTwo.name ? 1 : -1
      );
    } else if (sortInput === "Desc") {
      filteredList.sort((numOne, numTwo) =>
        numOne.name > numTwo.name ? -1 : 1
      );
    } else if (sortInput === "Reset") {
      dispatch(reset());
      // dispatch(search(""));
    }
    return filteredList;
  };

  const filteredGames = filteredSearch();
  return (
    <section className="flex flex-col">
      {/* <input type="text" onInput={searchValue} /> */}
      <div className="flex flex-row justify-center my-px gap-[0.5rem]">
        <select
          onInput={sortValue}
          className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
        >
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
          <option value="Desc">Reset</option>
        </select>
        <select
          onInput={sortValue}
          className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
        >
          <option disabled selected>
            Filter games by console
          </option>
          <option value="Asc">Xbox 360</option>
        </select>
        <select
          onInput={sortValue}
          className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
        >
          <option disabled selected>
            Filter games by genre
          </option>
          <option value="Asc">Action</option>
        </select>
      </div>
      <div className="form-control  max-w-[80vw]">
        <label className="label">
          <span className="label-text">Search for games</span>
        </label>
        <input
          onInput={searchValue}
          type="text"
          placeholder="Search for games by title, genre or platform"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <ul>
          {filteredGames.length === 0 && <p>no results found</p>}
          {filteredGames &&
            filteredGames.map((game) => (
              <GameCard key={game.id} game={game} liked={game.liked} />
            ))}
        </ul>
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Search;
