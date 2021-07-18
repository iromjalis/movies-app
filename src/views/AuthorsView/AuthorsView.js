import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from './AutorsView.styles';

import Axios from "axios";

class AuthorsView extends PureComponent {
  state = {
    authors: [],
  };
  async componentDidMount() {
    const response = await Axios.get("http://localhost:4040/authors");

    this.setState({ authors: response.data });
    return response.data;
  }

  render() {
    return (
      <div className="AutorsViewWrapper">
        Authors list:
        <ul>
          {this.state.authors.map((author) => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

AuthorsView.propTypes = {
  // bla: PropTypes.string,
};

AuthorsView.defaultProps = {
  // bla: 'test',
};

export default AuthorsView;
