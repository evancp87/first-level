import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const RatingsIcon = () => {
  const [value, setValue] = useState(RatingsIcon);

  return <FontAwesomeIcon icon="fa-regular fa-circle-check" />;
};

export default RatingsIcon;
