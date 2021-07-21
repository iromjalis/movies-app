import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import s from "./FilmList.module.css";
import FilmListItem from "../FilmListItem/FilmListItem";

const FilmList = ({ films, linkToHome, history, query }) => {
  // console.log("query", query);
  return (
    <>
      {films && (
        <ul className={s.TrendingList}>
          {films.map(({ id, title, poster_path, overview }) => (
            <FilmListItem
              key={id}
              query={query}
              history={history}
              linkToHome={linkToHome}
              id={id}
              title={title}
              poster_path={poster_path}
              overview={overview}
            />
          ))}
        </ul>
      )}
    </>
  );
};

FilmList.propTypes = {
  // bla: PropTypes.string,
};

FilmList.defaultProps = {
  // bla: 'test',
};

export default FilmList;
