/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import GameCard from "../Game/GameCard";
import { useSelector, useDispatch } from "react-redux";
import { selectHighestRated, filterHighestRated } from "./dashboardSlice";

const AllTimeBest = ({ handleLikes }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterHighestRated());
  }, [dispatch]);
  // gets filtered list of highest rated games from store
  const highestRated = useSelector(selectHighestRated);
  return (
    <div className="my-8 px-4 text-xl">
      <h2 className="my-4">All Time Highest Rated</h2>
      <ul>
        {highestRated &&
          highestRated.map((game) => (
            <li key={game.id}>
              <GameCard
                game={game}
                liked={game.liked}
                handleLikes={handleLikes}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AllTimeBest;
