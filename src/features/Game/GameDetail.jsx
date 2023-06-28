import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGame,
  getGameScreenshots,
  getTrailers,
  selectGameDetail,
  selectScreenshots,
  selectTrailers,
} from "./GameSlice";
// import { truncateText } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import { addToCart } from "../cart/cartSlice";
const GameDetail = () => {
  // const [showMore, setShowMore] = useState(false);

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
  };

  // Object of game detail sent to the shopping cart

  const gameDetails = {
    name,
    background_image,
    id,
    price,
  };

  // regex handles issue with description where the description from the api contains p and br tags
  // const tidyText = /<\/?p>|<br\s?\/?>/gi;
  // const tidiedDescription = description
  //   ? description.replaceAll(tidyText, "")
  //   : "";

  // const truncatedDescription = truncateText(description, 1000);

  // const truncatedDescription = truncateText(description, 1000);

  const videoUrl = trailers.length > 0 && trailers[0].data[480];

  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  const platformNames =
    platforms && platforms.map((console) => console.platform.name).join(", ");

  const developerNames =
    developers && developers.map((developer) => developer.name).join(", ");
  const genreNames = genres && genres.map((genre) => genre.name).join(", ");

  console.log(typeof description);

  return (
    <>
      <div
        style={
          background_image && {
            backgroundImage: `url(${background_image})`,
            height: 500,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }
        }
      ></div>
      {/* <img src={background_image} alt={name} /> */}
      <section className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-4">
          <FontAwesomeIcon
            icon={faCartPlus}
            onClick={() => handleAddToCart(gameDetails)}
          />
          <FontAwesomeIcon icon={faHeart} />
        </div>

        <p className="sm:text-6xl"> {name}</p>
        <p>{developerNames}</p>
        <p>{released}</p>
        <p>{platformNames}</p>
        <p>{genreNames}</p>
        {/* <p className="p-4"> */}
        {/* {showMore ? tidiedDescription : truncatedDescription} */}
        {/* {showMore ? description : truncatedDescription} */}
        {/* {parse(description)} */}
        {description}
        <p>{price}</p>

        {/* </p> */}
        {/* <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button> */}
        <p className="self-end text-4xl">{rating}</p>
      </section>

      <section className="p-4 ">
        <ul
          className="carousel carousel-center p-4 space-x-2 rounded-box overflow-y-hidden"
          style={{ height: 300 }}
        >
          {screenshots &&
            screenshots.map((screenshot, index) => (
              <li
                className="carousel-item "
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

        {/* only show a trailer if the game page has a trailer */}
        {videoUrl && (
          <div className="flex justify-center">
            <video controls>
              <source src={videoUrl} type="video/mp4"></source>
            </video>
          </div>
        )}
      </section>
    </>
  );
};

export default GameDetail;
