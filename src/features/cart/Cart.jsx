import { useState } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Cart = () => {
  const [value, setValue] = useState(Cart);

  return <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />;
};

export default Cart;
