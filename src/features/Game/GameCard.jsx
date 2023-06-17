/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
const GameCard = ({ game }) => {
  //   if in basket show market
  const {
    released,
    name,
    background_image,
    slug,
    id,
    rating,
    platforms: {
      platform: { name: platformName },
    },
  } = game;

  return (
    <>
      <article>
        <Link to={`/game/${slug}`}>
          <h3>{name}</h3>
          <p>Released {released}</p>
          <img src={background_image} alt={name} />
          <p>{platformName}</p>
          <p>{rating}</p>
        </Link>
      </article>
    </>
  );
};

export default GameCard;
