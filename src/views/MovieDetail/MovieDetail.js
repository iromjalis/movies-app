import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Axios from "axios";
import s from "./MovieDetail.module.css";

//*components
import Reviews from "../../components/Reviews/Reviews";
import Cast from "../../components/Cast/Cast";

//*services
import { getFilmById } from "../../services/apiService";
import FilmListItem from "../../components/FilmListItem/FilmListItem";

class MovieDetail extends Component {
  state = { id: this.props.match.params.id, film: {} };

  async componentDidMount() {
    if (this.props.location.state?.id !== undefined) {
      const id = this.props.location.state.id;
      const response = await getFilmById(id);
      this.setState({ film: response.data });
    }
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location.state.from, {
      query: this.props.location.state.query,
    });
  };
  // const { id, title, genres } = this.state;
  render() {
    const { path, params } = this.props.match;
    const id = params.id;
    const { film } = this.state;
    return (
      <>
        <button onClick={this.handleGoBack}>&#8617; Back</button>

        <h2>
          <b>ᗰOᐯIE:&#8195;</b>
          {film && film.title}
        </h2>
        <p>{film && film.overview} </p>
        {film && (
          <img
            width="400"
            height="600"
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.title}
          />
        )}
        <div className={s.BtnDiv}>
          <Link
            to={{
              pathname: `${this.props.match.url}/cast`,
              state: this.props.location.state,
            }}
          >
            <button className={s.Btn}>Cast</button>
          </Link>

          <Link
            to={{
              pathname: `${this.props.match.url}/reviews`,
              state: this.props.location.state,
            }}
          >
            <button className={s.Btn}>Reviews</button>
          </Link>

          <Route
            exact
            path={`${this.props.match.path}/cast`}
            component={Cast}
          />
          <Route
            exact
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </div>
      </>
    );
  }
}

export default MovieDetail;
