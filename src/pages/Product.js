import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";

function Product({ cartUpdater }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryIds, setCategoryIds] = useState([]);
  const [pricePairs, setPricePairs] = useState([]);

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

          if (pricePairs.length > 0) {
            //check if each product's price is  equal to min and less than or equal to max
            const filtered = dbProducts.filter(function (item, index, arr) {
              let verdict;

              for (const pair of pricePairs) {
                if (item.price >= pair[0] && item.price < pair[1]) {
                  verdict = true;
                } else {
                  verdict = false;
                }
              }

              return verdict;
            });
            setProducts(filtered);
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
    [categoryIds, pricePairs]
  );
  //function for removing category Ids (from checkboxes) from state array, or adding them
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

  function handlePriceFilterChange(e) {
    //check if the target is an input
    if (e.target.tagName.toLowerCase() === "input") {
      const max = Number(e.target.dataset.max);
      const min = Number(e.target.dataset.min);
      const pair = [min, max];

      //returns true if pair is inside pricePair Arr
      const isIncluded = pricePairs.find(function (item) {
        if (item[0] === pair[0] && item[1] === pair[1]) {
          return true;
        } else {
          return false;
        }
      });

      //if the pair is already included in pricepairs, remove it
      if (isIncluded) {
        const updated = pricePairs.filter(function (item, index) {
          return item[0] !== min && item[1] !== max;
        });
        setPricePairs(updated);
      } else {
        //add pair to pricePairs
        setPricePairs([...pricePairs, pair]);
      }
    } else {
      return;
    }
  }

  console.log(pricePairs);

  return (
    <div className="products">
      <div className="products-category-filter">
        <h2 className="filter-title">Categories</h2>
        {categories && (
          <CategoryFilter
            categories={categories}
            handleFilterChange={handleFilterChange}
          />
        )}
      </div>
      <div className="products-price-filter">
        <h2 className="filter-title">Price Filter</h2>
        {categories && (
          <PriceFilter handlePriceFilterChange={handlePriceFilterChange} />
        )}
      </div>

      <ul className="product-list">
        {products &&
          products.map(function (item, index, arr) {
            return (
              <ProductCard
                key={item.id}
                prod={item}
                cartUpdater={cartUpdater}
              />
            );
          })}
      </ul>
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Product;
