import "./CategoryFilter.css";
import { useState } from "react";
//Group of category filter checkboxes
function CategoryFilter({ categories, handleFilterChange }) {
  return (
    <div className="category-filter-container">
      {categories.map(function (cat, index, arr) {
        //get title & id from category object
        const { title, id } = cat; //id is category ID
        return (
          <div className="category" key={id}>
            <input
              onChange={function () {
                handleFilterChange(id);
              }}
              type="checkbox"
              name=""
              id={title.toLowerCase()}
            />
            <label className="filter-label" htmlFor={title.toLowerCase()}>
              {title}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
