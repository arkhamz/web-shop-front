import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Product() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    //function for fetching products
    async function getProducts() {
      //URL
      const URL = "http://localhost:4000/products";
      setLoading(true);
      //fetch the data
      try {
        const response = await axios.get(URL);
        const dbProducts = response.data;
        //store fetched data in state and set loading to false
        setProducts(dbProducts);
        setLoading(false);
      } catch (e) {
        //store error in state and set loading to false
        setError(e.message);
        setLoading(false);
      }
    }
    //end of async function
    getProducts();
  }, []);

  if (products) console.log(products);

  return (
    <div className="products">
      <ul className="product-list">
        {products &&
          products.map(function (item, index, arr) {
            return <ProductCard key={item.id} prod={item} />;
          })}
      </ul>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Product;
