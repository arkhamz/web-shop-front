import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartState }) => {
  return (
    <div className="cartPageContainer">
      <div className="links">
        <Link to="/">Products . </Link>{" "}
        <span style={{ color: "hotpink" }}>Shopping cart</span>
      </div>
      <h1>Shopping Cart</h1>
      <div className="cartContent">
        <div className="cartItems">
          <div className="columnNames">
            <h3 id="productH3" className="cartH3">
              Product
            </h3>
            <h3 id="priceH3" className="cartH3">
              Price
            </h3>
            <h3 id="quantityH3" className="cartH3">
              Quantity
            </h3>
            <h3 id="totalH3" className="cartH3">
              Total
            </h3>
          </div>
          <div className="cartProductList">list</div>
        </div>
        <div className="cartTotals">carttotals</div>
      </div>
    </div>
  );
};

export default Cart;
