import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </Link>
        </li>
        <li>
          <Link to="/shopping">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon="fa-solid fa-heart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
