import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState("");
  const { id } = useParams();
  console.log(reviews);

  useEffect(() => {
    const getReviews = async () => {
      const reviewArray = await axios.get(
        `http://localhost:4000/products/${id}/reviews`
      );

      setReviews(reviewArray.data);
    };

    getReviews();
  }, [id]);

  const renderReviews = !reviews
    ? "no reviews yet!"
    : reviews.map((review) => {
        return (
          <div key={review.id} className="reviewInstance">
            <h3>{review.ReviewerName}</h3>
            <p className="reviewRating">rating: {review.rating}</p>
            <p className="reviewText">{review.text}</p>
          </div>
        );
      });

  return <div className="reviewContainer">{renderReviews}</div>;
};

export default Reviews;
