import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartState, cartUpdater }) => {
  const [subtotals, setSubtotals] = useState(0);

  //quantity event handler
  const quantityUpdater = (product, value) => {
    product.quantity = +value;
    product.total = (product.quantity * product.price).toFixed(2);

    cartUpdater(product);
  };

  const removeItem = (product) => {
    cartUpdater(product, "remove");
  };

  const removeAll = () => {
    cartUpdater({}, "all");
  };

  const wut = () => {
    alert("not sure what this button should do");
  };

  //if cartState is empty put a placeholder instead
  const renderProducts =
    cartState.length < 1
      ? "nothing in cart yet!"
      : cartState.map((product) => {
          return (
            <div key={product.id} className="cartListItem">
              <div id="cartItemTitle">
                <img src={product.mainImg} alt="" />
                {product.title}
              </div>
              <div id="cartItemPrice">€{product.price}</div>
              <div id="cartItemQuantity">
                <input
                  onChange={(e) => quantityUpdater(product, e.target.value)}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={product.quantity}
                />
              </div>
              <div id="cartItemTotal">€{product.total}</div>
              <div
                onClick={() => {
                  removeItem(product);
                }}
                className="deleteItem"
              >
                ❌
              </div>
            </div>
          );
        });

  useEffect(() => {
    //everytime cartstate changes, calculate the new subtotal
    let newSubtotal = 0;

    cartState.forEach((product) => {
      newSubtotal += +product.total;
    });
    const roundedSub = newSubtotal.toFixed(2);

    setSubtotals(roundedSub);
  }, [cartState]);

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
            <button onClick={wut}>Update Cart</button>
            <button onClick={removeAll}>Clear Cart</button>
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
              <h4>Subtotals:</h4> <h4>{subtotals}</h4>
            </div>
            <div id="finalTotals">
              <h4>Totals:</h4> <h4>{(subtotals * 1.3).toFixed(2)}</h4>
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
