import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import defaultImg from "../../defaultImg.jpg";

//*styles
import s from "./FilmListItem.module.css";
const imgUrl = `https://image.tmdb.org/t/p/w500/`;
class FilmListItem extends PureComponent {
  state = { film: this.props.film };

  componentDidMount() {
    this.setState({ ...this.props.film });
  }

  render() {
    const { id, poster_path, title, overview, history, query, film } =
      this.props;

    return (
      <>
        <li key={id} className={s.TrendingItem}>
          <NavLink
            to={{
              pathname: `./movies/${id}`,
              state: { id, from: history.location.pathname, query },
            }}
          >
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                title={title + "  |  " + overview}
              />
            ) : (
              defaultImg
            )}

            <p>
              <u>Overview:</u> {overview}
            </p>
          </NavLink>
        </li>
      </>
    );
  }
}

FilmListItem.propTypes = {
  // bla: PropTypes.string,
};

FilmListItem.defaultProps = {};

export default FilmListItem;
