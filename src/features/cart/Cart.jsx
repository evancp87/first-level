import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  selectEmpty,
  selectItems,
  selectCount,
  addToCart,
  removeFromCart,
  clear,
  increment,
  decrement,
} from "../Dashboard/dashboardSlice";

import { useLocalStorage } from "../../utils/hooks/localStorage";

const Cart = () => {
  const dispatch = useDispatch();
  const items = selectItems;

  const handleRemoveItem = (payload) => {
    dispatch(removeItem(payload));
  };

  const handleClearCart = () => {
    dispatch(clear());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      {items.length === 0 ? (
        <p>Your cart is empty </p>
      ) : (
        <div className="cart_content">
          {items.map((item) => (
            <div key={item.id} className="cart__content-product">
              <div className="cart__content-product-details">
                <img alt="product img" className="cart__content-product-img" />
                <div className="cart__content-product-info">
                  <h3 className="cart__content-product-info-heading">{name}</h3>
                  <div className="cart__content-product-info-quantity">
                    {" "}
                    <p className="cart__content-product-info-quantity-detail">
                      £{price} x {quantity}
                    </p>
                    <p className="cart__content-product-info-quantity-amount">
                      £{total}
                    </p>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={handleRemoveItem}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <FontAwesomeIcon icon={faTrashCan} onClick={handleClearCart} />
          <button>Checkout</button>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </div>
      )}
    </>
  );
};

export default Cart;
