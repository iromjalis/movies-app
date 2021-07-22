import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCastInfo } from "../../services/apiService";
import s from "./Cast.module.css";
import defaultImg from "../../defaultImg.jpg";

const Cast = () => {
  const history = useHistory();
  console.log("cast", history);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(history.location.state.id).then((resp) => {
      setCast(resp.data.cast);
    });
  }, [history.location.state.id]);

  return (
    <>
      <h1>Cast</h1>
      <ul className={s.CastList}>
        {cast.length > 0 ? (
          cast.map(({ name, cast_id, profile_path, original_name }) => (
            <li key={cast_id}>
              <p>{name}</p>
              {profile_path ? (
                <img
                  width="150px"
                  height="150px"
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={original_name}
                />
              ) : (
                <p>404 - No photo</p>
              )}
            </li>
          ))
        ) : (
          <li>404 - Not found any cast</li>
        )}
      </ul>
    </>
  );
};

export default Cast;
