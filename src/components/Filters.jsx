import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ options, filter }) => {
  const [input, setInput] = useState("");

  return (
    <>
      {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up-a-z" />
      <FontAwesomeIcon icon="fa-solid fa-arrow-down-z-a" /> */}
      <select onInput={filter}>
        {options.map((option) => {
          <option
            value={input}
            // onInput={(e) => setInput(e.target.value)}
          >
            {option}
          </option>;
        })}
      </select>
      <FontAwesomeIcon icon={faAngleDown} />
    </>
  );
};

export default Filters;
