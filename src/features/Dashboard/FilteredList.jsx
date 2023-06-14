import { useState } from "react";
import FilteredGameCard from "./FilteredGameCard";
const FilteredList = () => {
  const [value, setValue] = useState(FilteredList);

  return (
    <>
      <ul>
        {games &&
          games.map((game) => <FilteredGameCard key={game.id} game={game} />)}
      </ul>
    </>
  );
};

export default FilteredList;
