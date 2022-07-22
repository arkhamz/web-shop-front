import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  const [cart, setCart] = useState([]);

  //this gets passed down and takes a product object. updates cart state when cart btns are clicked
  const cartUpdater = (productObject, string) => {
    //will remove object if "remove" is passed with it
    if (string === "remove") {
      const cartRemoved = [...cart].filter((product) => {
        return product.id !== productObject.id;
      });

      return setCart(cartRemoved);
    }
    //remove everything from cart
    if (string === "all") {
      return setCart([]);
    }

    //make sure that if there is no quantity yet that it inserts 1 as quantity and also adds a total price
    if (!productObject.quantity || !productObject.total) {
      productObject.quantity = 1;
      const totalProdPrice = productObject.quantity * productObject.price;
      productObject.total = totalProdPrice.toFixed(2);
    }

    //make a copy and check if the product is already present in the array, then add it or filter it out
    if (cart.length >= 1) {
      const newCart = cart.filter((product) => {
        return product.id !== productObject.id;
      });

      //sort the array by id in order to keep the products from shifting around
      const sortedCart = [...newCart, productObject].sort((a, b) => {
        return a.id - b.id;
      });
      setCart(sortedCart);
    } else {
      setCart([...cart, productObject]);
    }
  };

  console.log(cart);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Product cartState={cart} cartUpdater={cartUpdater} />}
          />

          <Route
            path="/details/:id"
            element={<Details cartState={cart} cartUpdater={cartUpdater} />}
          />
          <Route />
          {/* add this route when Cart component is made */}
          <Route
            path="/cart"
            element={<Cart cartState={cart} cartUpdater={cartUpdater} />}
          />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
