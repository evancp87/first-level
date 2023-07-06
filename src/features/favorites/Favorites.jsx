import React, { useState } from "react";
import GameCard from "../Game/GameCard";
import { useHandleLikes } from "../../utils/hooks/localStorage.jsx";
import gsap from "gsap";
import { Transition } from "react-transition-group";
const Favorites = () => {
  const { likes, handleLikes } = useHandleLikes();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const onLikeExit = (node) => {
    gsap.to(node, {
      x: -100,
      delay: 0.2,
      ease: "power3",
      opacity: 0,
      stagger: {
        amount: 0.2,
      },
    });
  };

  return (
    <div className="h-screen">
      <ul>
        {(likes.length === 0 && (
          <p className="mt-8 flex items-center justify-center text-xl">
            Nothing here. Like games to add to this section
          </p>
        )) ||
          []}
        {/* <TransitionGroup> */}
        {likes &&
          likes.map((game) => (
            <Transition
              key={game.id}
              timeout={200}
              in={true}
              // onEnter={handleEnter}
              onExit={onLikeExit}
              unmountOnExit
            >
              <li key={game.id}>
                <GameCard
                  game={game}
                  liked={game.liked}
                  handleLikes={handleLikes}
                />
              </li>
            </Transition>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
