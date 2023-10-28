import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { selectItems, selectCount, removeFromCart, clear } from "./cartSlice";

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
    <div className="overflow-cart max-h-96">
      {items.length === 0 ? (
        <p className="flex justify-center" style={{ padding: "3em" }}>
          Your cart is empty
        </p>
      ) : (
        <div className="p-2">
          {items.map((item) => (
            <div key={item.id} className="my-4">
              <div>
                <div className="p-2">
                  <img
                    src={item.background_image}
                    alt="product img"
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="my-2 text-lg">{item.name}</h3>
                    <div className="flex flex-row justify-between">
                      {/* if you keep adding the item to the basket the quantity goes up */}
                      <p>
                        £{item.price} x {item.quantity}
                      </p>
                      <div
                        className="flex self-end"
                        style={{ alignSelf: "end" }}
                      >
                        <FontAwesomeIcon
                          className="cursor-pointer"
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
          {/* total amount in basket */}
          <p className="my-2 p-2">Total: £{totalAmount}</p>
          <div className="mt-2">
            <button
              className="active-btn text-slate-100 mx-2 w-[30%] rounded-full bg-logo p-2 duration-300 ease-in-out hover:scale-110"
              onClick={handleClearCart}
            >
              Clear
            </button>
            <button
              className="active-btn text-slate-100 mx-2 w-[30%] rounded-full bg-logo p-2 duration-300 ease-in-out hover:scale-110"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
          <FontAwesomeIcon icon={["fa-solid", "fa-cart-shopping"]} />
          <FontAwesomeIcon icon={["fa-solid", "fa-trash-can"]} />
        </div>
      )}
    </div>
  );
};

export default Cart;
