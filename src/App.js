import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  //this gets passed down and takes a product object. updates cart state when cart btns are clicked
  const cartUpdater = (productObject) => {
    //make a copy and add the newly clicked product to it
    const newCart = [...cart, productObject];
    setCart(newCart);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route
            path="/details/:id"
            element={<Details cartUpdater={cartUpdater} />}
          />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
