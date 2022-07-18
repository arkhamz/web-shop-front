import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/details/1">Detail</Link>
          </li>
        </ul>
      </div>
      <div className="nav-search">
        <input type="text" />
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
