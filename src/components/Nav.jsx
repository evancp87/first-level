import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "../features/cart/Cart";
import { selectItems, selectTotal } from "../features/cart/cartSlice";

const Nav = () => {
  const items = useSelector(selectItems);
  const count = useSelector(selectTotal);

  return (
    <nav className="relative z-50 ms-[30px] flex flex-row  justify-between py-[2em]">
      <div>
        <Link to="/">
          <p className="logo-green cursor-pointer font-press">First Level</p>
        </Link>
      </div>
      <ul className="me-[30px] flex flex-row flex-wrap gap-x-[30px]">
        <li>
          <Link to="/">
            <FontAwesomeIcon
              className="cursor-pointer duration-300 ease-in-out hover:scale-150"
              icon={faHouse}
            />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon
              className="cursor-pointer duration-300 ease-in-out hover:scale-150"
              icon={faHeart}
            />
          </Link>
        </li>
        <li>
          <div className="dropdown-end dropdown relative">
            {/* shopping cart - includes number of items in basket- conditional */}
            {items.length > 0 && (
              <p
                className="text-slate-100 absolute flex items-center justify-center"
                style={{
                  position: "absolute",
                  border: "2px solid orange",
                  top: "-10px",
                  backgroundColor: "orange",
                  left: "60%",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                }}
              >
                {count}
              </p>
            )}
            <label tabIndex={0} className=" m-1">
              <FontAwesomeIcon
                className="cursor-pointer duration-300 ease-in-out hover:scale-150"
                icon={faCartShopping}
              />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-[200px] max-w-[300px] bg-base-100 p-2 shadow md:w-[300px]"
            >
              <Cart />
            </div>
          </div>
        </li>

        <li>
          <Link to="/search">
            <FontAwesomeIcon
              className="cursor-pointer duration-300 ease-in-out hover:scale-150"
              icon={faMagnifyingGlass}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
