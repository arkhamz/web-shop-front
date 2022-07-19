import "./ProductContainer.css";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductContainer = ({ object }) => {
  console.log("productContainer test", object.title);

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<AiFillStar key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="productContainer-productTabs">
      <div className="productContainer">
        {/* three containers to house the details and description/review tabs and links */}
        <div className="links">
          <Link to="/products">Products . </Link>{" "}
          <span style={{ color: "hotpink" }}>{object.title}</span>
        </div>
        <div className="productContent">
          {/* image + specifics in one div */}

          <div className="productImage">
            <img src={object.mainImg} alt="" />
          </div>
          <div className="productDetails">
            <h3>{object.title}</h3> <br />
            <span className="starSpan">
              {generateStars(object.rating)}
            </span>{" "}
            <button>Add Review</button>
            <br />
            <span>€{object.price}</span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <br />
            <button id="cartButton">
              {" "}
              <pre>
                <AiOutlineShoppingCart /> {"  "}Add to Cart
              </pre>
            </button>{" "}
            <button>
              <pre>
                <AiOutlineHeart style={{ color: "#151875" }} /> Favorite
              </pre>
            </button>
            <p>Categories: </p>
          </div>
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
