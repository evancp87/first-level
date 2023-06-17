import { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameDetail = ({ game }) => {
  const { slug } = useParams();

  const {
    released,
    name,
    background_image,
    // slug,
    id,
    rating,
    platforms: {
      platform: [{ name: platformName }],
    },
    developers: [{ name: developerName }],
  } = game;
  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  return (
    <>
      <img src={background_image} alt={name} />
      <p>{name}</p>
      <p>{developerName}</p>
      <p>{released}</p>
      <p>{platformName}</p>
      <p>{rating}</p>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
        <FontAwesomeIcon icon="fa-regular fa-circle-check" />
        <FontAwesomeIcon icon="fa-regular fa-heart" />
      </div>
      <Hero />;
    </>
  );
};

export default GameDetail;
