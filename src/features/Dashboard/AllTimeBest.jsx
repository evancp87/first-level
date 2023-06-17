import { useState, useEffect } from "react";
import GameCard from "../Game/GameCard";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReset,
  selectSort,
  selectNewlyReleased,
  selectUpcoming,
  selectHighestRated,
  games,
  sort,
  reset,
  newlyReleased,
  upcoming,
  filterHighestRated,
} from "./dashboardSlice";

const AllTimeBest = () => {
  // const dispatch = useDispatch();
  const highestRated = useSelector(selectHighestRated);
  console.log(highestRated);

  return (
    <>
      {highestRated &&
        highestRated.map((game) => <GameCard key={game.id} game={game} />)}
    </>
  );
};

export default AllTimeBest;
