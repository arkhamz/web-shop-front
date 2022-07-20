import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      categoryId: 1,
      createdAt: "2022-07-18T12:37:18.492Z",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      mainImg: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: 3.9,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      updatedAt: "2022-07-18T12:37:18.492Z",
    },
    {
      categoryId: 3,
      createdAt: "2022-07-18T12:37:18.492Z",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,
      mainImg:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      rating: 4.1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      updatedAt: "2022-07-18T12:37:18.492Z",
    },
    {
      categoryId: 3,
      createdAt: "2022-07-18T12:37:18.492Z",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      id: 3,
      mainImg: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
      rating: 4.7,
      title: "Mens Cotton Jacket",
      updatedAt: "2022-07-18T12:37:18.492Z",
    },
  ]);

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
