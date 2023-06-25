/* eslint-disable react/prop-types */

import { useRef } from "react";
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
  const {
    released,
    name,
    background_image,
    slug,
    id,
    rating,
    platforms,
    // genres,
    liked,
    // rating: {
    //   ratings: [
    //     { id: ratingId },
    //     { title: ratingTitle },
    //     { count: ratingCount },
    //     { percent: ratingPercent },
    //   ],
    // },
  } = game;

  const dispatch = useDispatch();
  // const [toggleLikes, setToggleLikes] = useLocalStorage("Likes", []);
  const [likes, setLikes] = useLocalStorage("Likes", []);

  const handleLikes = (id, game) => {
    dispatch(gameLikes(id));

    // console.log(Object.entries(toggleLikes));
    // setToggleLikes(game);
    setLikes([...likes, game]);

    //
  };
  const platformNames =
    platforms && platforms.map((console) => console.platform.name).join(", ");

  // const ratingsArray = rating.map((rating) => rating.id);
  // const liked = game.liked;

  return (
    <>
      <SkeletonTheme color="#f3f3f3" highlightColor="#e0e0e0">
        <article className="card card-side items-center flex-row bg-base-100 shadow-xl card-bordered m-6 mx-w-full flex-wrap">
          <picture className="sm:max-w-[100%] lg:max-w-[30%] rounded-sm">
            <Link to={`/game/${slug}`}>
              {/* <img
              className="rounded-xl"
              // style={{ width: "30%", height: "30%" }}
              src={background_image}
              alt={name}
            /> */}
              {background_image ? (
                <img
                  className="rounded-xl"
                  // style={{ width: "30%", height: "30%" }}
                  src={background_image}
                  alt={name}
                />
              ) : (
                <Skeleton width={100} count={3} />
              )}
            </Link>
          </picture>

          <div className="card-body">
            <div className="flex flex-col gap-4 ">
              <h2 className="card-title ">{name}</h2>
              <p>Released {released}</p>
              <p className="text-sm">{platformNames}</p>
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
              <p className="card-actions justify-end">{rating}</p>
            </div>
          </div>
        </article>
      </SkeletonTheme>
    </>
  );
};

export default GameCard;
