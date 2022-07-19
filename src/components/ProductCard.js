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
  const { title, description, mainImg, price } = prod;

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
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
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
