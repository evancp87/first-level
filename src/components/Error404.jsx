import React from "react";
import { Link } from "react-router-dom";
import empty from "../assets/empty.png";
const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="my-4">Not found</h2>

      <img
        className="my-4 aspect-[3/3] rounded-md"
        src={empty}
        alt="empty chest"
      />
      <div className="flex w-[30%] flex-col items-center">
        <p>
          The page could not be found. Please check the address bar for typos,
          and make sure the page exists, otherwise navigate back to the home
          page below
        </p>
        <button className="active-btn text-slate-100 my-4 h-[40px] w-[200px]  rounded-full bg-logo">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error404;
