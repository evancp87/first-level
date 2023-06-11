import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const SearchIcon = () => {
  const [value, setValue] = useState(searchIcon);

  return<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
};

export default SearchIcon;
