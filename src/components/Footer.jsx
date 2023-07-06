import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative bottom-0  left-0 right-0 mt-4 flex h-[100px] flex-col items-center gap-4">
      <p>Made by Evan Parker in {year}</p>
      <p>
        Built using the excellent{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://rawg.io/apidocs"
          className="underline"
        >
          RAWG api{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
