import { useState } from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="jusitfy-center flex flex-col items-center">
      <div className="flex flex-row justify-between">
        <Link to="/">Home</Link>
        <h2>Not found</h2>
      </div>
      <img
        className="rounded-md"
        src="src/assets/empty.png"
        alt="empty chest"
      />
      <p>
        The page could not be found, please check the address bar for typos, and
        make sure the page exists, otherwise follow the link back to the home
        page
      </p>
    </div>
  );
};

export default Error404;
