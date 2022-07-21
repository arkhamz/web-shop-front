import "./ProductCard.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineZoomIn,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ prod, cartUpdater, cartState }) {
  //destructure product object's properties
  const { title, description, mainImg, price, rating } = prod;

  const generateStars = (rating) => {
    const starrArr = []; //this will eventually contain an array of stars
    for (let i = 0; i < 5; i++) {
      //5 is total  no. of stars
      //if the current number is < 5 stars, do the following
      //basically add a star to array until i = rating
      if (i < rating) {
        //if current no. less than rating
        starrArr.push(<AiFillStar />); //add filled star to array
      } else {
        //push empty star to array if current no. is above rating
        starrArr.push(<AiOutlineStar className="empty" />);
      }
    }
    return starrArr;
  };

  const addToCart = () => {
    console.log(prod);
    cartUpdater(prod);
  };

  const productPageCartBtn = cartState.find((product) => {
    return product.id === prod.id;
  }) ? (
    <FaShoppingCart
      title="Added to Cart"
      id="productPageItemCartBtn"
      onClick={addToCart}
    />
  ) : (
    <AiOutlineShoppingCart
      title="Add to Cart"
      id="productPageItemCartBtn"
      onClick={addToCart}
    />
  );

  return (
    <div className="product-card">
      <img className="card-image" src={mainImg} alt={title} />
      <div className="card-content">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-price">
          <p>€{price}</p>
          <div className="card-stars">
            {generateStars(rating).map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
        </div>
        <div className="card-text">
          <p>{description.substring(0, 100)}...</p>
        </div>
        <div className="card-icons">
          {productPageCartBtn}
          <AiOutlineHeart />
          <AiOutlineZoomIn />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
