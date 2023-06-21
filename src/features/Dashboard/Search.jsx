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

    //     break;

    //   default:
    //     break;
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
      <input type="text" onInput={searchValue} />
      <select onInput={sortValue}>
        <option value=""></option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
        <option value="Desc">Reset</option>
        <option value="Desc">Developers</option>
        <option value="Desc">Genre</option>
      </select>
      <select>
        <option value="Desc">Genre</option>
      </select>
      <select>
        {/* <option>{platformNames}</option> */}
        <option value="Desc">PS5</option>
        <option value="Desc">Xbox Series X</option>
        <option value="Desc">Nintendo Switch</option>
      </select>

      <ul>
        {filteredGames.length === 0 && <p>no results found</p>}
        {filteredGames &&
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} liked={game.liked} />
          ))}
      </ul>
    </section>
  );
};

export default Search;
