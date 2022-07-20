import "./ProductContainer.css";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import DetailsTabs from "./DetailsTabs";

//component body
const ProductContainer = ({ cartState, cartUpdater, object }) => {
  //add state to manage whether the cart button shows 'add to cart' or 'added already'

  //function to insert stars according to rating
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

  console.log("cartstate inside of productcontainer", cartState);
  //when clicked it will pass the product object up to app.js and add it to the cart
  const addToCart = () => {
    cartUpdater(object);
  };

  //if this product object is already present in cart state, we change the btn
  const cartBtn = cartState.find((product) => {
    return product.id === object.id;
  }) ? (
    <button
      disabled
      style={{ cursor: "default", backgroundColor: "#a04170" }}
      onClick={addToCart}
      id="cartButton"
    >
      {" "}
      <pre>
        <AiOutlineShoppingCart /> {"  "}
        Already in Cart!
      </pre>
    </button>
  ) : (
    <button onClick={addToCart} id="cartButton">
      {" "}
      <pre>
        <AiOutlineShoppingCart /> {"  "}
        Add to Cart
      </pre>
    </button>
  );

  //placheholder event handler for review, favorite, and cart buttons
  const btnPlaceholderFunc = (e) => {
    console.log("you clicked: ", e.target);
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
            <button onClick={btnPlaceholderFunc}>Add Review</button>
            <br />
            <span>€{object.price}</span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <br />
            {cartBtn}{" "}
            <button onClick={btnPlaceholderFunc}>
              <pre>
                <AiOutlineHeart style={{ color: "#151875" }} /> Favorite
              </pre>
            </button>
            <br />
            <br />
            <p>Categories: {object.category.title}</p>
            <br />
            <br />
            <div id="socialMediaIcons">
              Share {"     "}
              <img
                src="https://shop.belomed.com/web/images/ic_facebook.svg"
                alt=""
              />
              <img
                src="https://icons-for-free.com/download-icon-instagram+icon-1320168276654160044_512.png"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/308971/twitter-social-media-social-network-logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <DetailsTabs description={object.description} />
    </div>
  );
};

export default ProductContainer;
