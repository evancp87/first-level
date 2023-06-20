/* eslint-disable react/prop-types */

import { lazy, suspense } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "../../utils/hooks/localStorage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import {
  gameLikes,
  addToLikes,
  selectLikes,
} from "../Dashboard/dashboardSlice";

const GameCard = ({ game }) => {
  //   if in basket show market
  const { released, name, background_image, slug, id, rating, platforms } =
    game;

  const dispatch = useDispatch();

  const [toggleLikes, setToggleLikes] = useLocalStorage("Likes", []);

  const handleLikes = (id, game) => {
    dispatch(gameLikes(id));

    setToggleLikes(game);
  };
  const platformNames = platforms.map((console) => console.platform.name);

  const liked = game.liked;

  return (
    <>
      <article className="card card-bordered">
        <div className="card-body">
          <Link to={`/game/${slug}`}>
            <img
              style={{ width: "30%", height: "30%" }}
              src={background_image}
              alt={name}
            />
          </Link>

          <div>
            <h3 className="card-title">{name}</h3>
            <p>Released {released}</p>
            <p>{platformNames}</p>
          </div>
          <div>
            <FontAwesomeIcon
              style={{
                filter: liked
                  ? "brightness(0) saturate(100%) invert(23%) sepia(80%) saturate(6831%) hue-rotate(355deg) brightness(98%) contrast(123%)"
                  : "filter: brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(296deg) brightness(127%) contrast(115%)",
              }}
              icon={faHeart}
              onClick={() => {
                // setLikes([...likes, game]);
                handleLikes(game.id, game);
              }}
            />
            <p>{rating}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default GameCard;
