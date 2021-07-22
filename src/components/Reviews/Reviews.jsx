import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getReviewsInfo } from "../../services/apiService";
import s from "./Reviews.module.css";

const Reviews = () => {
  const history = useHistory();
  console.log("cast", history);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsInfo(history.location.state.id).then((resp) =>
      setReviews(resp.data.results)
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Reviews</h1>
      <ul className={s.ReviewsList}>
        {reviews.length > 0 ? (
          reviews.map(
            ({
              author_details,
              rating,
              author,
              id,
              content,
              created_at,
              url,
            }) => (
              <li key={id}>
                <b>@{author}</b>: <span>{content}</span>
                {author_details.rating ? (
                  <p>
                    <i>rating:</i> {author_details.rating} &#9734;
                  </p>
                ) : (
                  ""
                )}
              </li>
            )
          )
        ) : (
          <li>404 - Not found any reviews</li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
