import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
//*styles
import s from "./FilmListItem.module.css";
const imgUrl = `https://image.tmdb.org/t/p/w500/`;
class FilmListItem extends PureComponent {
  state = {};

  componentDidMount() {
    this.setState({ ...this.props });
  }

  render() {
    const { id, poster_path, title, overview, history, query } = this.props;
    const titleImg = title.toUpperCase();
    // <Link
    //     to={{
    //       pathname: `./movies/` + id,
    //       state: {
    //         search: query !== undefined ? query : "",
    //         id: id,
    //         from: history.location.pathname,
    //       },
    //     }}
    //   ></Link>
    return (
      <>
        <li key={id} className={s.TrendingItem}>
          <img
            src={imgUrl + poster_path}
            alt={title}
            title={titleImg + "  |  " + overview}
          />

          <p>
            <u>Overview:</u> {overview}
          </p>
        </li>
      </>
    );
  }
}

FilmListItem.propTypes = {
  // bla: PropTypes.string,
};

FilmListItem.defaultProps = {
  // bla: 'test',
};

export default FilmListItem;
