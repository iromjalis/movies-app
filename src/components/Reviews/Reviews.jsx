import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getReviewsInfo } from "../../services/apiService";

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
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <li>404 - Not found any reviews</li>
        )}
      </ul>
    </>
  );
};

export default Reviews;
