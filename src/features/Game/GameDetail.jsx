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
  } = game;

  // const {
  //   data: { [480]: videoUrl, max: maxVideoUrl },
  //   preview,
  // } = trailers;

  // console.log(videoUrl);

  const videoUrl = trailers.length > 0 && trailers[0].data[480];

  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  const platformNames =
    platforms && platforms.map((console) => console.platform.name);

  const developerNames =
    developers && developers.map((developer) => developer.name);
  const genreNames = genres && genres.map((genre) => genre.name);

  return (
    <>
      <img src={background_image} alt={name} />
      <div>
        <FontAwesomeIcon icon={faCartPlus} />
        <FontAwesomeIcon icon={faCircleCheck} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <p>{name}</p>
      <p>{developerNames}</p>
      <p>{released}</p>
      <p>{platformNames}</p>
      <p>{genreNames}</p>
      <p>{description}</p>

      <p>{rating}</p>
      <ul>
        {screenshots &&
          screenshots.map((screenshot, index) => (
            <li key={screenshot.id}>
              <img
                src={screenshot.image}
                alt={`${name} screenshot ${index} `}
              />
            </li>
          ))}
      </ul>
      <video src={videoUrl}></video>
      <Hero />
    </>
  );
};

export default GameDetail;
