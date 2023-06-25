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
    <nav className="flex flex-row justify-between ms-[30px] my-[2em] ">
      <div>
        <Link to="/">
          <p className="font-press logo">First Level</p>
        </Link>
      </div>
      <ul className="flex flex-row flex-wrap gap-x-[30px] me-[30px]">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </li>
        <li>
          <div className="dropdown dropdown-end relative">
            {items.length > 0 && (
              <p
                className="absolute text-slate-100 flex justify-center items-center"
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
                className="cursor-pointer"
                icon={faCartShopping}
              />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Cart />
            </div>
          </div>
        </li>

        <li>
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
