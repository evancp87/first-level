import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "./GameSlice";
import Hero from "../../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { selectGameDetail } from "./GameSlice";

const GameDetail = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGameDetail);

  const { slug } = useParams();

  // get slug off router params, dispatch action to store. slice takes in slug as parameter and makes api call using slug as string interpolation for endpoint,
  const fetchGame = useCallback(
    () => dispatch(getGame(slug)),
    [dispatch, slug]
  );

  useEffect(() => {
    console.log("hello!");
    fetchGame();
  }, [fetchGame]);

  const {
    released,
    name,
    background_image,
    // slug,
    // id,
    rating,
    platforms,
    genres,
    developers,
  } = game;

  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  const platformNames =
    platforms && platforms.map((console) => console.platform.name);
  // console.log(platformNames);

  const developerNames =
    developers && developers.map((developer) => developer.name);
  const genreNames = genres && genres.map((genre) => genre.name);

  return (
    <>
      <img src={background_image} alt={name} />
      <p>{name}</p>
      <p>{developerNames}</p>
      <p>{released}</p>
      <p>{platformNames}</p>
      <p>{genreNames}</p>
      <p>{rating}</p>
      <div>
        <FontAwesomeIcon icon={faCartPlus} />
        <FontAwesomeIcon icon={faCircleCheck} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <Hero />
    </>
  );
};

export default GameDetail;
