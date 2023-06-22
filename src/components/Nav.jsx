import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="flex flex-row justify-between ms-[30px] my-[2em] ">
      <div>
        <Link to="/">
          <p className="font-press logo">First Level</p>
        </Link>
      </div>
      <ul className="flex flex-row gap-x-[30px] me-[30px]">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </li>
        <li>
          <Link to="/shopping">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
