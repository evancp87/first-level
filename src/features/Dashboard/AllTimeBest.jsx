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
    <>
      {highestRated &&
        highestRated.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            liked={game.liked}
            handleLikes={handleLikes}
          />
        ))}
    </>
  );
};

export default AllTimeBest;
