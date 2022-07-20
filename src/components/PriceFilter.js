//G
function PriceFilter({ handlePriceFilterChange }) {
  // State = [[0, 150], [300, 450]]
  return (
    <div onChange={handlePriceFilterChange} className="price-filters">
      <div className="price-filter">
        <input data-min="0" data-max="150" type="checkbox" />
        <label htmlFor="">€0.00 - €150.00</label>
      </div>
      <div className="price-filter">
        <input data-min="150" data-max="350" type="checkbox" />
        <label htmlFor="">€150.00 - €350.00</label>
      </div>
      <div className="price-filter">
        <input data-min="150" data-max="504" type="checkbox" />
        <label htmlFor="">€150.00 - €504.00</label>
      </div>
      <div className="price-filter">
        <input data-min="450" data-max="45000" type="checkbox" name="" />
        <label htmlFor="">€450 +</label>

        {/* if data-above exists, return items with price greater than data above */}
      </div>
    </div>
  );
}

export default PriceFilter;
