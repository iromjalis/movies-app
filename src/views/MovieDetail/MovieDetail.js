import React, { Component } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

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
    // console.log("state", this.state);
    return (
      <>
        Movie Detail: {this.props.location.pathname}
        <p> {this.state.adult}</p>
        {/* <div key={title} className="MovieViewWrapper">
          <h1>{title} </h1>
          <h2>{tagline} </h2>
          <img src={poster_path} alt={title} />
          <ul>{genres}</ul> 
        </div>*/}
      </>
    );
  }
}

export default MovieDetail;
