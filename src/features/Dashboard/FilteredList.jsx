import { useEffect } from "react";
import FilteredGameCard from "./FilteredGameCard";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters";
import {
  selectReset,
  selectSort,
  selectNewlyReleased,
  selectUpcoming,
  // games,
  sort,
  reset,
  newlyReleased,
  upcoming,
  // filterHighestRated,
} from "./dashboardSlice";

// TODO: make reusable and configurable
const FilteredList = () => {
  const dispatch = useDispatch();
  const sortValue = useSelector(selectSort);
  const resetList = useSelector(selectReset);
  const newReleases = useSelector(selectNewlyReleased);
  const upcomingGames = useSelector(selectUpcoming);

  useEffect(() => {
    dispatch(upcoming), dispatch(newlyReleased);
  }, [dispatch]);

  console.log(upcomingGames, newReleases);

  const setFilteredGames = (e) => {
    dispatch(sort(e.target.value));
  };

  const filteredList = () => {
    let filteredList = [...upcoming];

    // sorting between either
    if (sortValue && sortValue === "Upcoming Games" && sortValue.length > 0) {
      return filteredList;
    } else if (sortValue && sortValue === "New Releases" && sortValue.length) {
      filteredList = [...newReleases];
    }

    return filteredList;
  };

  const filteredGames = filteredList();

  // const filterOptions = [
  //   { label: "Upcoming Games", value: "upcoming" },
  //   { label: "New Releases", value: "new_releases" },
  // ];

  return (
    <>
      {/* <Filters options={filterOptions} onInput={setFilteredGames} /> */}

      <select
        onInput={setFilteredGames}
        className="select w-[250px] max-w-xs  select-bordered select-xs  max-w-xs"
      >
        <option>Upcoming Games</option>
        <option>New Releases</option>
      </select>
      <ul className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {filteredGames.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredGames &&
          filteredGames.map((game) => (
            <li className="carousel-item" key={game.id}>
              <FilteredGameCard game={game} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default FilteredList;
