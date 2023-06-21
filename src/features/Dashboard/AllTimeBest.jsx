import { useState, useEffect } from "react";
import GameCard from "../Game/GameCard";
import { useSelector, useDispatch } from "react-redux";
import { selectHighestRated, filterHighestRated } from "./dashboardSlice";
const AllTimeBest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterHighestRated());
  }, [dispatch]);

  const highestRated = useSelector(selectHighestRated);
  return (
    <>
      {highestRated &&
        highestRated.map((game) => (
          <GameCard key={game.id} game={game} liked={game.liked} />
        ))}
    </>
  );
};

export default AllTimeBest;
