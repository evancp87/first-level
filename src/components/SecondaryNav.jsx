import { useState } from "react";
import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";

const SecondaryNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <BackBtn />
          </li>
          <li></li>
        </ul>
      </nav>
    </>
  );
};

export default SecondaryNav;
