import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
const heart = () => {
  const [value, setValue] = useState(heart);

  return <FontAwesomeIcon icon="fa-sharp fa-regular fa-heart" />;
};

export default heart;
