import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { selectItems, selectCount, removeFromCart, clear } from "./cartSlice";

// import { useLocalStorage } from "../../utils/hooks/localStorage";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const totalAmount = useSelector(selectCount);

  // handles interactions in cart with items
  const handleRemoveItem = (payload) => {
    dispatch(removeFromCart(payload));
  };

  const handleClearCart = () => {
    dispatch(clear());
  };

  const handleCheckout = () => {
    alert("Thanks for purchasing!");
    dispatch(clear());
  };

  return (
    // if there are items loop over and show details, including price and total
    <>
      {items.length === 0 ? (
        <p className="p" style={{ padding: "3em" }}>
          Your cart is empty{" "}
        </p>
      ) : (
        <div className="">
          {items.map((item) => (
            <div key={item.id} className="m-y-4">
              <div className="">
                <div className="">
                  <img
                    src={item.background_image}
                    alt="product img"
                    className=""
                  />
                  <div className="">
                    <h3 className="">{item.name}</h3>
                    <div className="flex flex-row justify-between">
                      <p>
                        £{item.price} x {item.quantity}
                      </p>
                      <div
                        className="flex self-end"
                        style={{ alignSelf: "end" }}
                      >
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          onClick={handleRemoveItem}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="">£{totalAmount}</p>
          <button onClick={handleClearCart}>Clear</button>
          <button onClick={handleCheckout}>Checkout</button>
          <FontAwesomeIcon icon={["fa-solid", "fa-cart-shopping"]} />
          <FontAwesomeIcon icon={["fa-solid", "fa-trash-can"]} />
        </div>
      )}
    </>
  );
};

export default Cart;
