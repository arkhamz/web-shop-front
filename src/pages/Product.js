import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";

function Product() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoryIds, setCategoryIds] = useState([]);
  const [pricePairs, setPricePairs] = useState([]);

  useEffect(
    function () {
      //function for fetching products & filtering
      async function getProducts() {
        //URL
        const URL = "http://localhost:4000/products";
        //only set loading to true if not filtering
        if (!categoryIds || !pricePairs) setLoading(true);
        //fetch the data
        try {
          const response = await axios.get(URL);
          const dbProducts = response.data;

          if (categoryIds.length > 0 && pricePairs.length > 0) {
            //filter by category then by price
            const filteredByCategory = dbProducts.filter(function (
              item,
              index,
              arr
            ) {
              return categoryIds.includes(item.categoryId);
            });
            //filter by price pairs
            const filteredCategoryPrice = filteredByCategory.filter(function (
              item,
              index,
              arr
            ) {
              let verdict;
              //Could refactor below into a function
              for (const pair of pricePairs) {
                if (item.price >= pair[0] && item.price <= pair[1]) {
                  verdict = true;
                } else if (!item.price >= pair[0] && !item.price <= pair[1]) {
                  verdict = false;
                }
              }
              return verdict;
            });

            setProducts(filteredCategoryPrice);
            return setLoading(false);
          } else if (categoryIds.length > 0) {
            const filtered = dbProducts.filter(function (item, index, arr) {
              return categoryIds.includes(item.categoryId);
            });
            console.log(filtered);
            setProducts(filtered);
            return setLoading(false);
          } else if (pricePairs.length > 0) {
            //check if each product's price is  equal to min and less than or equal to max
            //could refactor this
            const filtered = dbProducts.filter(function (item, index, arr) {
              let verdict;

              for (const pair of pricePairs) {
                if (item.price >= pair[0] && item.price <= pair[1]) {
                  verdict = true;
                } else if (!item.price >= pair[0] && !item.price <= pair[1]) {
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

      //Return true if the pair is already inside pricePairs, returns false if not
      const isIncluded = pricePairs.find(function (item) {
        if (item[0] === pair[0] && item[1] === pair[1]) {
          return true;
        } else {
          return false;
        }
      });

      //if pair is already included in pricepairs, remove it
      if (isIncluded) {
        const updated = pricePairs.filter(function (item, index) {
          return item[0] !== min && item[1] !== max;
        });
        setPricePairs(updated);
      } else {
        //pair is not inside pricePairs, add it to the arr
        setPricePairs([...pricePairs, pair]);
      }
    } else {
      return;
    }
  }

  return (
    <div className="products">
      <div className="products-category-filter">
        {categories && <h2 className="filter-title">Categories</h2>}
        {categories && (
          <CategoryFilter
            categories={categories}
            handleFilterChange={handleFilterChange}
          />
        )}
      </div>
      <div className="products-price-filter">
        {categories && <h2 className="filter-title">Price filter</h2>}
        {categories && (
          <PriceFilter handlePriceFilterChange={handlePriceFilterChange} />
        )}
      </div>

      <ul className="product-list">
        {products &&
          products.map(function (item, index, arr) {
            return <ProductCard key={item.id} prod={item} />;
          })}
      </ul>
      {error && <h1>{error}</h1>}
      {loading && <h1 className="loading">...</h1>}
    </div>
  );
}

export default Product;
