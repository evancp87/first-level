import React, { useEffect, useCallback } from "react";
import FilteredGameCard from "./FilteredGameCard";
import { oneMonthAgo, oneMonthAhead, currentDate } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { selectNewReleases, setGamesByDate } from "./dashboardSlice";

const FilteredList = () => {
  const dispatch = useDispatch();

  const newReleases = useSelector(selectNewReleases);

  const handleGetGames = useCallback(() => {
    dispatch(
      setGamesByDate({
        startDate: oneMonthAgo,
        endDate: currentDate,
        dateType: "newlyReleased",
      })
    );
  }, [dispatch, setGamesByDate]);

  useEffect(() => {
    handleGetGames();
  }, [handleGetGames]);

  return (
    <>
      <h2 className="my-4">Latest Games</h2>

      <ul className="carousel-center carousel rounded-box space-x-2 overflow-y-hidden ">
        {newReleases && newReleases.length === 0 ? (
          <div className="my-[5em]">
            <p className="text-logo">
              No newly released games available right now
            </p>
          </div>
        ) : (
          newReleases &&
          newReleases.map((game) => (
            <li className="carousel-item cursor-move" key={game.id}>
              <FilteredGameCard game={game} />
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default FilteredList;
