import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartState }) => {
  //if cartState is empty put a placeholder instead
  const renderProducts =
    cartState.length < 1
      ? "nothing in cart yet!"
      : cartState.map((product) => {
          return (
            <div key={product.id} className="cartListItem">
              {product.title}
            </div>
          );
        });
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
            <h3 id="productTotalH3" className="cartH3">
              Total
            </h3>
          </div>
          <div className="cartProductList">{renderProducts}</div>
          <div className="cartListBtns">
            <button>Update Cart</button>
            <button>Clear Cart</button>
          </div>
        </div>
        <div className="cartTotalsDiv">
          <div className="columNames">
            <h3 id="totalsH3" className="cartH3">
              Cart Totals
            </h3>
          </div>
          <div className="totalsProceedCard">
            <div id="subTotals">
              <h4>Subtotals:</h4> <h4>eurosss</h4>
            </div>
            <div id="finalTotals">
              <h4>Totals:</h4> <h4>eurosss</h4>
            </div>
            <div id="shipText">
              <p>🟢 Shipping & taxes calculated at checkout</p>
            </div>
            <div id="proceedButtonDiv">
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
