import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Filters = () => {
  const [value, setValue] = useState(Filters);

  return (
    <>
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
