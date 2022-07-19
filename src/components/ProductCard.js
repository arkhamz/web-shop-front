import "./ProductCard.css";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineZoomIn,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

function ProductCard({ prod }) {
  //destructure product object's properties
  const { title, description, mainImg, price, rating } = prod;

  const generateStars = (rating) => {
    const starrArr = []; //this will eventually contain an array of stars
    for (let i = 0; i < 5; i++) {
      //if the current number is < rating, add filled star to array
      if (i < rating) {
        starrArr.push(<AiFillStar />);
      } else {
        //otherwise push an empty star to the array
        starrArr.push(<AiOutlineStar className="empty" />);
      }
    }
    return starrArr;
  };

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
          <AiOutlineShoppingCart />
          <AiOutlineHeart />
          <AiOutlineZoomIn />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
