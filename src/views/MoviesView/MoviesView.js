import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import FilmListItem from "../../components/FilmListItem/FilmListItem";
import FilmList from "../../components/FilmList/FilmList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFilmByQuery } from "../../services/apiService";
// import PropTypes from "prop-types";
import s from "./MoviesView.module.css";

class MoviesView extends PureComponent {
  state = {
    movies: "",
    query: "",
  };

  componentDidMount() {}

  handleSubmit = (query) => {
    this.setState({ query });
  };
  render() {
    const { query } = this.state;
    return (
      <div className={s.MoviesViewWrapper}>
        <SearchBar />
        <FilmList
          query={this.state.query}
          onSubmit={this.handleSubmit}
          onSetQuery={this.handleSetQuery}
        />
        {/* <ul>
          {this.state.movies &&
            this.state.movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`3/movie/${query}`}>
                  <FilmListItem query={query} />

                  {title ? title : `404 - page not found ☹`}
                  {title}
                </Link>
              </li>
            ))}
        </ul> */}
      </div>
    );
  }
}

MoviesView.propTypes = {
  // bla: PropTypes.string,
};

MoviesView.defaultProps = {
  // bla: 'test',
};

export default MoviesView;
