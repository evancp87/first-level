/* eslint-disable react/prop-types */
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
const FilteredGameCard = ({ game }) => {
  const { released, name, background_image, rating, slug } = game;

  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#e0e0e0">
      <div className="w-full overflow-x-auto">
        {/* links to game detail */}
        <Link to={`/game/${slug}`}>
          <div
            className="carousel-item image-full relative h-[300px] w-[200px] gap-[1em] rounded-3xl bg-base-100 shadow-xl md:w-96  "
            style={{
              backgroundImage: background_image ? (
                `url(${background_image})`
              ) : (
                <Skeleton count={1} />
              ),
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
              backgroundColor: "rgb(97 97 97 / 50%)",
            }}
          >
            <div
              className=" bg-blue-400 relative flex flex-col justify-start justify-center gap-[0.5em] ps-[1em] pt-[1em]  
          "
            >
              <h2>{name || <Skeleton count={1} />}</h2>
              <p>{`Released ${released}` || <Skeleton count={1} />}</p>
              <div className=" justify-end">
                <p>{`Rating: ${rating}` || <Skeleton count={1} />}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </SkeletonTheme>
  );
};

export default FilteredGameCard;
