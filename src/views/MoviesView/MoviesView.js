import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
//import { Test } from './BooksView.styles';
import Axios from "axios";

class MoviesView extends PureComponent {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const API = "0dba41d64d38d3842f2e56a581ca4bf3";
    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API}`;

    const response = await Axios.get(`${URL}`);

    this.setState({ movies: response.data.results });
    return response;
  }

  render() {
    //*/books
    // console.log(this.props.match.url);
    return (
      <div className="MoviesViewWrapper">
        Movies list:
        <ul>
          {this.state.movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${this.props.match.url}/3/movie/${id}`}>
                {title ? title : `404 - page not found ☹`}
                {title}
              </Link>
            </li>
          ))}
        </ul>
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
