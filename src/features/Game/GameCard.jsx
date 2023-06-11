import { useState } from "react";

const GameCard = () => {
  const [value, setValue] = useState(GameCard);
  //   if in basket show market

  return (
    <>
      <div>
        <div>
          <img />
        </div>

        <div>
          <h3>title</h3>
          <p>developer</p>
          <p>release date</p>
          <p>[platform]</p>
        </div>
        <div>
          <p>Rating</p>
          <p>Ranking</p>
        </div>
      </div>
    </>
  );
};

export default GameCard;
