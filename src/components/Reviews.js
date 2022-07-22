import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Reviews.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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

  const dateFormatter = (dateDromDB) => {
    const newDate = new Date(dateDromDB);
    const stringDate = newDate.toString();
    const arrayDate = stringDate.split(" ").splice(0, 5).join(" ");
    return arrayDate;
  };

  const renderReviews = !reviews
    ? "no reviews yet!"
    : reviews.map((review) => {
        return (
          <div key={review.id} className="reviewInstance">
            <h3>{review.ReviewerName}</h3>
            <p className="reviewRating">{generateStars(review.rating)}</p>
            <p className="reviewText">{review.text}</p>
            <p className="reviewTime">-{dateFormatter(review.createdAt)}</p>
          </div>
        );
      });

  return <div className="reviewContainer">{renderReviews}</div>;
};

export default Reviews;
