/* eslint-disable react/prop-types */

import { useState } from "react";

const FilteredGameCard = ({ game }) => {
  const { released, name, background_image, rating } = game;
  return (
    <article>
      <h3>{name}</h3>
      <p>Released {released}</p>
      <img src={background_image} alt={name} />
      <p>{rating}</p>
    </article>
  );
};

export default FilteredGameCard;
