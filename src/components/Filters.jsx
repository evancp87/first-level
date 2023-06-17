import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filters = () => {
  return (
    <>
      <FontAwesomeIcon icon="fa-solid fa-arrow-up-a-z" />
      <FontAwesomeIcon icon="fa-solid fa-arrow-down-z-a" />
      <select>
        <option value=""></option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
      </select>
      <FontAwesomeIcon icon="fa-sharp fa-light fa-angle-down" />
    </>
  );
};

export default Filters;
