import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Axios from "axios";

//*components
import Reviews from "../../Reviews/Reviews";
import Cast from "../../components/Cast/Cast";
class MovieDetail extends Component {
  state = {};

  async componentDidMount() {
    const movieId = this.props.location.pathname;

    const API = "0dba41d64d38d3842f2e56a581ca4bf3";
    const URL = `https://api.themoviedb.org${movieId}?api_key=${API}`;

    const response = await Axios.get(`${URL}`);
    this.setState({ ...response.data });
    return response.data;
  }
  // const { id, title, genres } = this.state;
  render() {
    const { path } = this.props.match;
    return (
      <>
        Movie Detail: {this.props.location.pathname}
        <p> </p>
        <NavLink
        // to={{
        //   pathname: `${this.props.match.url}/reviews`,
        //   state: this.props.history.state,
        // }}
        >
          <button>Reviews</button>
        </NavLink>
        <NavLink
        // to={{
        //   pathname: `${this.props.match.url}/cast`,
        //   state: this.props.history.state,
        // }}
        >
          <button>Cast</button>
        </NavLink>
        <Route path={`${path}/reviews`} component={Reviews} />
        <Route path={`${path}/cast`} component={Cast} />
      </>
    );
  }
}

export default MovieDetail;
