/* eslint-disable react/prop-types */

import { useState } from "react";

const FilteredGameCard = ({ game }) => {
  const { released, name, background_image, rating } = game;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full gap-[1em]">
      <figure>
        <img src={background_image} alt={`${name} background`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Released {released}</p>
        <div className="card-actions justify-end">
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default FilteredGameCard;
