//Group of category filter checkboxes
function CategoryFilter({ categories, handleFilterChange }) {
  return (
    <>
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
            <label htmlFor={title.toLowerCase()}>{title}</label>
          </div>
        );
      })}
    </>
  );
}

export default CategoryFilter;
