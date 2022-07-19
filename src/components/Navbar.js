import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-main">
        <ul className="nav-links">
          <li>
            <span>The</span>
            <span style={{ color: "white" }}>Shop</span>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/details/1">Detail</NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-search">
        <div className="nav-search-input">
          <input type="text" />
          <AiOutlineSearch className="search" />
        </div>
        <div className="icons">
          <FaRegUser />
          <AiOutlineShoppingCart />
          <AiOutlineHeart />
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
