import { useEffect } from "react";
import FilteredGameCard from "./FilteredGameCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectReset,
  selectSort,
  selectNewlyReleased,
  selectUpcoming,
  selectHighestRated,
  games,
  // sort,
  // reset,
  // newlyReleased,
  // upcoming,
  // filterHighestRated,
} from "./dashboardSlice";

const FilteredList = () => {
  // const dispatch = useDispatch();
  const sortlist = useSelector(selectSort);
  const resetList = useSelector(selectReset);
  const newReleases = useSelector(selectNewlyReleased);
  const upcomingGames = useSelector(selectUpcoming);

  // useEffect(() => {
  //   dispatch(upcoming), dispatch(newlyReleased);
  // }, [dispatch]);
  // const filteredList = () => {
  //     let filteredList = [...games];
  //
  //     // sorting alphabetically ascending or descending
  //     if (upcomingGames && upcomingGames  === "upcoming") {
  //       filteredList.sort((numOne, numTwo) =>
  //         numOne.character > numTwo.character ? 1 : -1
  //       );
  //     } else if (upcomingGames === "new releases") {
  //       filteredList.sort((numOne, numTwo) =>
  //         numOne.character > numTwo.character ? -1 : 1
  //       );
  //     }

  //     return filteredList;
  //   };
  return (
    <>
      <input />
      <ul>
        {games &&
          games.map((game) => <FilteredGameCard key={game.id} game={game} />)}
      </ul>
    </>
  );
};

export default FilteredList;
