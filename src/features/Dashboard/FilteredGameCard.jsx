import { useState } from "react";

const FilteredGameCard = ({ game }) => {
  const [value, setValue] = useState(FilteredGameCard);

  const { released, name, background_image, rating } = game;
  return (
    <article>
      <h3>{name}</h3>
      <p>Released {released}</p>
      <img src={background_image} alt={name} />
    </article>
  );
};

export default FilteredGameCard;
