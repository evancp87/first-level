import React, { useEffect } from "react";
import GameCard from "../Game/GameCard";
import { useSelector, useDispatch } from "react-redux";
import { selectHighestRated, filterHighestRated } from "./dashboardSlice";
import { useHandleLikes } from "../../utils/hooks/localStorage";

const AllTimeBest = () => {
  const dispatch = useDispatch();
  const { likes, handleLikes } = useHandleLikes();

  useEffect(() => {
    dispatch(filterHighestRated());
  }, [dispatch]);

  const highestRated = useSelector(selectHighestRated);
  return (
    <div className="p-4">
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
