import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <FontAwesomeIcon
        onClick={() => {
          navigate(-1);
        }}
        className="absolute left-5 top-5 z-40 cursor-pointer"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(49%) sepia(93%) saturate(395%) hue-rotate(82deg) brightness(87%) contrast(86%)",
        }}
        size="2x"
        icon={faArrowLeft}
      />
    </>
  );
};

export default BackBtn;
