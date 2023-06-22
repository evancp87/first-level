import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGame,
  getGameScreenshots,
  getTrailers,
  selectGameDetail,
  selectScreenshots,
  selectTrailers,
} from "./GameSlice";
import Hero from "../../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";

const GameDetail = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGameDetail);
  const screenshots = useSelector(selectScreenshots);
  const trailers = useSelector(selectTrailers);

  const { slug } = useParams();

  const fetchGame = useCallback(() => {
    dispatch(getGame(slug));
    dispatch(getGameScreenshots(slug));
    dispatch(getTrailers(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    console.log("hello!");
    fetchGame();
  }, [fetchGame]);

  const {
    released,
    name,
    background_image,
    rating,
    platforms,
    genres,
    developers,
    description,
    // rating: {
    //   ratings: [
    //     { id: ratingId },
    //     { title: ratingTitle },
    //     { count: ratingCount },
    //     { percent: ratingPercent },
    //   ],
    // },
  } = game;

  // regex handles issue with description where the description from the api contains p and br tags
  const tidyText = /<\/?p>|<br\s?\/?>/gi;
  const tidiedDescription = description
    ? description.replaceAll(tidyText, "")
    : "";

  // const {
  //   data: { [480]: videoUrl, max: maxVideoUrl },
  //   preview,
  // } = trailers;

  // console.log(videoUrl);

  const videoUrl = trailers.length > 0 && trailers[0].data[480];

  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  const platformNames =
    platforms && platforms.map((console) => console.platform.name).join(", ");

  const developerNames =
    developers && developers.map((developer) => developer.name).join(", ");
  const genreNames = genres && genres.map((genre) => genre.name).join(", ");

  return (
    <>
      <img src={background_image} alt={name} />
      <div>
        <FontAwesomeIcon icon={faCartPlus} />
        <FontAwesomeIcon icon={faCircleCheck} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faThumbsUp} flip="horizontal" />
        <FontAwesomeIcon icon={faThumbsDown} />
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <section>
        <p className="text-6xl"> {name}</p>
        <p>{developerNames}</p>
        <p>{released}</p>
        <p>{platformNames}</p>
        <p>{genreNames}</p>
        <p>{tidiedDescription}</p>

        <p>{rating}</p>
      </section>

      <section>
        <ul className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          {screenshots &&
            screenshots.map((screenshot, index) => (
              <li className="carousel-item" key={screenshot.id}>
                <img
                  className="rounded-box"
                  src={screenshot.image}
                  alt={`${name} screenshot ${index} `}
                />
              </li>
            ))}
        </ul>

        {/* only show a trailer if the game page has a trailer */}
        {videoUrl && (
          <video controls>
            <source src={videoUrl} type="video/mp4"></source>
          </video>
        )}
      </section>
    </>
  );
};

export default GameDetail;
