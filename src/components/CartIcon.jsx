import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const CartIcon = () => {
  const [value, setValue] = useState(CartIcon);

  return <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />;
};

export default CartIcon;
