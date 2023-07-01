import React, { useState } from "react";
// import { useLocalStorage } from "@uidotdev/usehooks";
import GameCard from "../Game/GameCard";
import { removeLike, getLikes, selectLikes } from "../Dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../utils/hooks/localStorage";
import { useHandleLikes } from "../../utils/hooks/localStorage.jsx";

const Favorites = () => {
  //  use useLocalStorage hooks here to loop over keys of localStorage and show game cards
  // const likesFromState = useSelector(selectLikes);
  // console.log(likesFromState);
  // const [...localStorageLikes] = useLocalStorage("Likes", []);
  // const likes = [...likesFromState, ...localStorageLikes];
  const [likesItem] = useLocalStorage("Likes", []);
  const { likes, handleLikes } = useHandleLikes();

  return (
    <ul>
      {(likesItem.length === 0 && (
        <p className="flex items-center justify-center text-xl">
          Nothing here. Like Games to add to this section
        </p>
      )) ||
        []}
      {likesItem &&
        likesItem.map((game) => (
          <li key={game.id}>
            <GameCard
              game={game}
              liked={game.liked}
              handleLikes={handleLikes}
            />
          </li>
        ))}
    </ul>
  );
};

export default Favorites;
