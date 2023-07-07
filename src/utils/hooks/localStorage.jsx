import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gameLikes } from "../../features/Dashboard/dashboardSlice";

// local storage custom hook
export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    try {
      const storedData = localStorage.getItem(key);

      return storedData ? JSON.parse(storedData) : initialState;
    } catch (error) {
      console.error(`Error parsing "${key}" from localStorage:`, error);
      return initialState;
    }
  });

  useEffect(() => {
    console.log(key, state);
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

// hook for removing likes from localStorage
export function useHandleLikes() {
  const dispatch = useDispatch();
  let updatedLikes;
  const [likes, setLikes] = useLocalStorage("Likes", []);
  const handleLikes = (id, game) => {
    dispatch(gameLikes(id));

    // Finds index of specific game in local storage
    const likedGameIndex = likes.findIndex((likedGame) => likedGame.id === id);

    // checks if likedGame is in the localStorage array and if it is splices it out and updates, otherwise adds the game to local storage
    if (likedGameIndex !== -1) {
      updatedLikes = [...likes];
      updatedLikes.splice(likedGameIndex, 1);
      setLikes(updatedLikes);

      localStorage.setItem("Likes", JSON.stringify(updatedLikes));
    } else {
      const {
        id: gameId,
        slug,
        name,
        released,
        background_image,
        rating,
        liked,
      } = game;
      const likedGame = {
        id: gameId,
        slug,
        name,
        released,
        background_image,
        rating,
        liked: !liked,
      };
      setLikes([...likes, likedGame]);

      localStorage.setItem("Likes", JSON.stringify([...likes, likedGame]));
    }
  };

  return { likes, handleLikes };
}
