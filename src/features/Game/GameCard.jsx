/* eslint-disable react/prop-types */

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "../../utils/hooks/localStorage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";

import { gameLikes } from "../Dashboard/dashboardSlice";

const GameCard = ({ game, handleLikes }) => {
  //   if in basket show market
  const {
    released,
    name,
    background_image,
    slug,
    id,
    rating,
    platforms,

    liked,
  } = game;

  // const dispatch = useDispatch();
  // const [toggleLikes, setToggleLikes] = useLocalStorage("Likes", []);
  // const [likes, setLikes] = useLocalStorage("Likes", []);

  // const handleLikes = (id, game) => {
  //   dispatch(gameLikes(id));

  //   const { id: gameId, slug, name, released, background_image, rating } = game;
  //   const likedGame = {
  //     id: gameId,
  //     slug,
  //     name,
  //     released,
  //     background_image,
  //     rating,
  //     liked,
  //   };

  //   setLikes([...likes, likedGame]);
  // };

  const platformNames =
    platforms && platforms.map((console) => console.platform.name).join(", ");

  return (
    <>
      <SkeletonTheme color="#f3f3f3" highlightColor="#e0e0e0">
        <article className="mx-w-full card-bordered card card-side m-6 flex-row flex-wrap items-center bg-base-100 shadow-xl">
          <picture className="rounded-sm sm:max-w-[100%] lg:max-w-[20%]">
            <Link to={`/game/${slug}`}>
              {background_image ? (
                <img className="rounded-xl" src={background_image} alt={name} />
              ) : (
                <Skeleton width={100} count={3} />
              )}
            </Link>
          </picture>

          <div className="card-body">
            <div className="flex flex-col gap-4 ">
              <h2 className="card-title ">{name}</h2>
              <p>{game ? `Released ${released}` : <Skeleton width={100} />}</p>
              <p className="text-sm">
                {game ? platformNames : <Skeleton width={100} />}
              </p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="active-btn cursor-pointer"
                style={{
                  filter: liked
                    ? "brightness(0) saturate(100%) invert(23%) sepia(80%) saturate(6831%) hue-rotate(355deg) brightness(98%) contrast(123%)"
                    : "none",
                }}
                icon={faHeart}
                onClick={() => {
                  handleLikes(game.id, game);
                }}
              />
              <p className="card-actions justify-end">
                {game ? `Rating: ${rating}` : <Skeleton width={100} />}{" "}
              </p>
            </div>
          </div>
        </article>
      </SkeletonTheme>
    </>
  );
};

export default GameCard;
