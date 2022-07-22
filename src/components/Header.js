import "./Header.css";
import pic from "../pic.jpg";

function Header() {
  return (
    <header>
      <div className="header-text">
        <h4>Products for every need, at the distance of a click</h4>
      </div>
      <div className="header-images">
        <img src={pic} alt="" />
        <div className="header-box-left"></div>
        <div className="header-box-right"></div>
      </div>
    </header>
  );
}

export default Header;
