import { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const GameDetail = () => {
  const [value, setValue] = useState(GameDetail);
  const { slug } = useParams();
  // Hero image, rating, back button, sub nav- with ratings icon, bookmark, title, released, description, screenshots, tailer

  //   if in basket show market
  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
      <Hero />;
    </>
  );
};

export default GameDetail;
