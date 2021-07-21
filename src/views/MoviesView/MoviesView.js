import React, { PureComponent } from "react";
// import PropTypes from "prop-types";

//*components
import FilmList from "../../components/FilmList/FilmList";
// import SearchBar from "../../components/SearchBar/SearchBar";

//*helpers
import { getFilmsByQuery } from "../../services/apiService";

//*styles
import s from "./MoviesView.module.css";

class MoviesView extends PureComponent {
  state = {
    films: [],
    query: "",
  };

  async componentDidMount() {
    if (this.props.location.state !== null) {
      const response = await getFilmsByQuery(this.props.location.state.query);
      // console.log("MoviesPage", this.props.location.state.query);
      // console.log("MoviesPage", response);
      this.setState({
        films: response.data.results,
        query: this.props.location.state.query,
      });
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getFilmsByQuery(this.state.query);
    this.setState({ films: response.data.results });
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query, films } = this.state;
    return (
      <div className={s.MoviesViewWrapper}>
        {/* <SearchBar /> */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              name="query"
              value={query}
              onChange={this.handleChange}
              placeholder="Найтите любой фильм"
            />
          </label>
          <button>Search</button>
        </form>

        <FilmList
          films={films}
          query={query}
          onSubmit={this.handleSubmit}
          onSetQuery={this.handleSetQuery}
          history={this.props.history}
        />
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
