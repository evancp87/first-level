import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useLocalStorage } from "@uidotdev/usehooks";

const Cart = () => {

  // Timeout for cart items
  return (
  
    {items.length === 0 ? <><p>Your cart is empty </p></> : 
    <div className="cart_content">
    <div className="cart__content-product">
      <div className="cart__content-product-details">
        <img
          src={image}
          alt="product img"
          className="cart__content-product-img"
        />
        <div className="cart__content-product-info">
          <h3 className="cart__content-product-info-heading">{name}</h3>
          <div className="cart__content-product-info-quantity">
            {" "}
            <p className="cart__content-product-info-quantity-detail">
              ${price} x {quantity}
            </p>
            <p className="cart__content-product-info-quantity-amount">
              ${total}
            </p>
          </div>
        </div>
        <img
          src={require("../assets/images/icon-delete.svg").default}
          alt="trash icon"
          onClick={clearCart}
          tabIndex="0"
          className="cart__content-product-trash"
        />
      </div>
      <CheckoutBtn />
  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
  <FontAwesomeIcon icon="fa-solid fa-trash-can" />
    </div>
    </div>}
)
};

export default Cart;
