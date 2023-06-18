/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
const GameCard = ({ game }) => {
  //   if in basket show market
  const { released, name, background_image, slug, id, rating, platforms } =
    game;

  const platformNames = platforms.map((console) => console.platform.name);

  return (
    <>
      <article>
        {/* <Link to={{ pathname: `/game/${slug}`, state: { game: game } }}> */}
        <Link to={`/game/${slug}`}>
          {/* <Link to={{ pathname: `/game/${slug}`, state: { game } }}> */}
          <h3>{name}</h3>
          <p>Released {released}</p>
          <img src={background_image} alt={name} />
          <p>{platformNames}</p>
          <p>{rating}</p>
        </Link>
      </article>
    </>
  );
};

export default GameCard;
