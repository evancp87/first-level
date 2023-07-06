import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BackBtn from "../../components/BackBtn";
import {
  getGame,
  getGameScreenshots,
  getTrailers,
  selectGameDetail,
  selectScreenshots,
  selectTrailers,
} from "./GameSlice";
import { truncateText } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import { addToCart } from "../cart/cartSlice";
const GameDetail = () => {
  const [showMore, setShowMore] = useState(false);
  const gameDetailRef = useRef(null);
  const parallaxRef = useRef(null);

  const dispatch = useDispatch();
  const game = useSelector(selectGameDetail);
  const screenshots = useSelector(selectScreenshots);
  const trailers = useSelector(selectTrailers);

  const { slug } = useParams();

  const fetchGame = useCallback(() => {
    dispatch(getGame(slug));
    dispatch(getGameScreenshots(slug));
    dispatch(getTrailers(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    console.log("hello!");
    fetchGame();
  }, [fetchGame]);

  useEffect(() => {
    const handleScroll = () => {
      let offset = window.pageYOffset;
      parallaxRef.current.style.backgroundPositionY = offset * 0.7 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    released,
    name,
    background_image,
    rating,
    platforms,
    genres,
    developers,
    description,
    id,
    price,
  } = game;

  const handleAddToCart = (game) => {
    dispatch(addToCart(game));
    gameDetailRef.current.scrollIntoView({
      behavior: "smooth",
      // block: "start",
    });
  };

  // Object of game detail sent to the shopping cart

  const gameDetails = {
    name,
    background_image,
    id,
    price,
  };

  // regex handles issue with description where the description from the api contains p and br tags
  const insertSpaces = /<p>/gi;
  const tidiedDescription = description
    ? description
        .replaceAll(insertSpaces, "<p class='my-4'>")
        .replaceAll(/<br>/gi, "<br><br>")
    : "";

  // const truncatedDescription = truncateText(description, 1000);

  const truncatedDescription = truncateText(tidiedDescription, 500);
  const isTooLong = truncatedDescription.length < tidiedDescription.length;
  const videoUrl = trailers.length > 0 && trailers[0].data[480];
  const previewUrl = trailers.length > 0 && trailers[0].preview;

  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  const platformNames =
    platforms && platforms.map((console) => console.platform.name).join(", ");

  const developerNames =
    developers && developers.map((developer) => developer.name).join(", ");
  const genreNames = genres && genres.map((genre) => genre.name).join(", ");

  console.log(typeof description);

  return (
    <section ref={gameDetailRef}>
      <header
        ref={parallaxRef}
        style={
          background_image && {
            backgroundImage: `url(${background_image})`,
            height: 500,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }
        }
      >
        <BackBtn />
      </header>
      {/* <BackBtn /> */}
      {/* <img src={background_image} alt={name} /> */}
      <section className="flex flex-col items-center px-[3em]">
        <div className="mt-6 flex flex-col items-center gap-4 ">
          <p className="text-center text-4xl"> {name}</p>
          <p>{developerNames}</p>
          <p>{released}</p>
          <p>{platformNames}</p>
          <p>{genreNames}</p>
        </div>

        <div className="w-full">
          {showMore ? (
            <div>{parse(tidiedDescription)}</div>
          ) : (
            <div> {parse(truncatedDescription)}</div>
          )}

          {/* </p> */}
          {isTooLong && (
            <button
              className="active-btn text-slate-100 flex h-[40px] w-[200px] items-center justify-center rounded-full
           bg-logo duration-300 ease-in-out hover:scale-110"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
          <div className="mt-6 flex flex-row flex-wrap items-center justify-between">
            <div className="mt-4 flex justify-between gap-4 ">
              {/* <p className="flex flex-row">Price:</p>
              <p>£{price}</p>
              <FontAwesomeIcon
                icon={faCartPlus}
                size="2x"
                className="cursor-pointer"
                onClick={() => handleAddToCart(gameDetails)}
              /> */}
              <button
                className="active-btn btn flex min-w-[200px] justify-evenly rounded-full  duration-300 ease-in-out hover:scale-110"
                onClick={() => handleAddToCart(gameDetails)}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size="2x"
                  className="cursor-pointer"
                />
                £{price}
              </button>
            </div>
            <p className="mt-4 text-xl">Rating: {rating}</p>
          </div>
        </div>
      </section>

      <section className="my-6 py-[2em]">
        <div className="w-full overflow-x-auto">
          <ul
            className="carousel-center carousel rounded-box  space-x-2 overflow-y-hidden p-4"
            style={{ height: 300 }}
          >
            {screenshots &&
              screenshots.map((screenshot, index) => (
                <li
                  className="carousel-item w-[200px] cursor-move gap-[1em]  shadow-xl md:w-96"
                  style={{ height: 300 }}
                  key={screenshot.id}
                >
                  <img
                    className="rounded-box object-cover"
                    src={screenshot.image}
                    alt={`${name} screenshot ${index} `}
                  />
                </li>
              ))}
          </ul>
        </div>

        {/* only show a trailer if the game page has a trailer */}
        {videoUrl && (
          <div className="my-[2em] flex justify-center p-[0.5em]">
            <video controls poster={previewUrl} className="w-full">
              <source src={videoUrl} type="video/mp4"></source>
            </video>
          </div>
        )}
      </section>
    </section>
  );
};

export default GameDetail;
