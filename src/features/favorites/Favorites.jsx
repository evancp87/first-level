import { useState } from "react";
// import { useLocalStorage } from "@uidotdev/usehooks";
import GameCard from "../Game/GameCard";
import { removeLikes, getLikes, selectLikes } from "./favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../utils/hooks/localStorage";

const Favorites = () => {
  //  use useLocalStorage hooks here to loop over keys of localStorage and show game cards
  // const likesFromState = useSelector(selectLikes);
  // console.log(likesFromState);
  // const [localStorageLikes] = useLocalStorage("Likes", []);
  // const likes = [...likesFromState, ...localStorageLikes];
  const [likes] = useLocalStorage("Likes", []);
  return (
    <ul>
      {likes.length === 0 && <p>Add Games To Favorites</p>}
      {likes &&
        likes.map((game) => (
          <li key={game.id}>
            <GameCard game={game} liked={game.liked} />
          </li>
        ))}
    </ul>
  );
};

export default Favorites;
