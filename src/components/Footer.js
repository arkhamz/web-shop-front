import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <span style={{ color: "white" }}>The</span>
        <span style={{ color: "#8568FF" }}>Shop</span>
      </div>
      <div className="footer-categories">
        <h4>Categories</h4>
        <div className="category-text">
          <p>Laptops & Computers</p>
          <p>Cameras & PHotography</p>
          <p>Smart Phones & Tablets</p>
          <p>Video Games & Consoles</p>
          <p>Waterproof Headphones</p>
        </div>
      </div>
      <div className="footer-account">
        <h4>My account</h4>
        <div className="account-text">
          <p>My Account</p>
          <p>Discount</p>
          <p>Returns</p>
          <p>Orders History</p>
          <p>Order Tracking</p>
        </div>
      </div>
      <div className="footer-social">
        <h4>Follow us</h4>
        <div className="footer-social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
