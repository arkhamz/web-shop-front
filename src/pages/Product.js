import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

function Product() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryIds, setCategoryIds] = useState([]);

  useEffect(
    function () {
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
          //if categoriesArr contains anything, filter db for items whose category id matches
          //filter products by category Ids
          if (categoryIds.length > 0) {
            const filtered = dbProducts.filter(function (item, index, arr) {
              return categoryIds.includes(item.categoryId);
            });
            console.log(filtered);
            setProducts(filtered);
            //return out of this otherwise the filter is overwritten by
            //setProducts down there
            return setLoading(false);
          }
          setProducts(dbProducts);
          setLoading(false);
        } catch (e) {
          //store error in state and set loading to false
          setError(e.message);
          setLoading(false);
        }
      }
      //function for getting categories
      async function getCategories() {
        const URL = "http://localhost:4000/categories";
        try {
          const response = await axios.get(URL);
          const dbCategories = response.data;
          setCategories(dbCategories);
        } catch (e) {
          console.log(e.message);
        }
      }

      getProducts();
      getCategories();
    },
    [categoryIds]
  );

  function handleFilterChange(id) {
    //check if the categoryId array includes id already, if it does, remove it by filtering
    if (categoryIds.includes(id)) {
      //filter out this id
      const updated = categoryIds.filter(function (idNum, index) {
        return idNum !== id;
      });
      setCategoryIds(updated);
    } else {
      setCategoryIds([...categoryIds, id]);
    }
  }

  return (
    <div className="products">
      <div className="products-categories">
        <form>
          {categories && (
            <CategoryFilter
              categories={categories}
              handleFilterChange={handleFilterChange}
            />
          )}
        </form>
      </div>
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
