import React, { Component } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

class MovieDetail extends Component {
  state = { movie: [] };

  async componentDidMount() {
    const movieId = this.props.location.pathname;
    console.log("movieId", movieId);
    const API = "0dba41d64d38d3842f2e56a581ca4bf3";
    const URL = `https://api.themoviedb.org${movieId}?api_key=${API}`;
    //   https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

    const response = await Axios.get(`${URL}`);
    console.log(response);
  }

  render() {
    return (
      <div className="MovieViewWrapper">
        <p>Movie Detail</p>
      </div>
    );
  }
}

export default MovieDetail;
