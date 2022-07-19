import "./ProductContainer.css";

const ProductContainer = ({ object }) => {
  console.log("productContainer test", object.title);
  return (
    <div className="productContainer">
      {/* three containers to house the details and description/review tabs and links */}
      <div className="links">
        <p>links here</p>
      </div>
      <div className="productContent">
        {/* image + specifics in one div */}

        <div className="productImage">
          <img src={object.mainImg} alt="" />
        </div>
        <div className="productDetails">
          details here!
          <h3>{object.title}</h3>
          <p>{object.price}</p>
          <p>{object.rating}</p>
        </div>
      </div>
      <div className="productTabs">
        product tabs
        <p>{object.description}</p>
      </div>
    </div>
  );
};

export default ProductContainer;
