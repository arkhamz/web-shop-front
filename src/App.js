import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  //this gets passed down and takes a product object. updates cart state when cart btns are clicked
  const cartUpdater = (productObject) => {
    //make a copy and check if the product is already present in the , then add it or filter it out
    if (cart.length >= 1) {
      const newCart = cart.filter((product) => {
        return product.id !== productObject.id;
      });
      setCart([...newCart, productObject]);
    } else {
      setCart([...cart, productObject]);
    }
  };

  console.log("cart state", cart);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route
            path="/details/:id"
            element={<Details cartState={cart} cartUpdater={cartUpdater} />}
          />
          <Route />
          {/* add this route when Cart component is made */}
          <Route path="/cart" element={<Cart cartState={cart} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
