import React, { PureComponent } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
//*components
import FilmList from "../../components/FilmList/FilmList";
//*styles
import s from "./HomeView.module.css";
//*helpers
import { getTrendingFilms } from "../../services/apiService";

class HomeView extends PureComponent {
  state = {
    films: [],
  };
  componentDidMount() {
    getTrendingFilms().then((response) => {
      this.setState({ films: response.data.results });
    });
  }

  render() {
    const { films } = this.state;
    return (
      <>
        <FilmList history={this.props.history} films={this.state.films} />
      </>
    );
  }
}

HomeView.propTypes = {
  // bla: PropTypes.string,
};

HomeView.defaultProps = {
  // bla: 'test',
};

export default HomeView;
