import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import { Switch, Route, NavLink } from "react-router-dom";
import "./AutorsView.css";
import AuthorDetail from "../../components/AuthorDetail/AuthorDetail.js";

import Axios from "axios";

class AuthorsView extends PureComponent {
  state = {
    authors: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      "http://localhost:4040/authors?_embed=books"
    );

    this.setState({ authors: response.data });
    return response.data;
  }
  handleClick = () => {
    console.log(`${this.props.match.url} `);
  };

  render() {
    return (
      <div className="AutorsViewWrapper">
        <h2>Authors list:</h2>
        <ul>
          {this.state.authors.map((author) => (
            <li key={author.id}>
              <NavLink
                to={`${this.props.match.url}/${author.id}`}
                onClick={this.handleClick}
              >
                {author.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {this.state.authors.length && (
          <Route
            path={`${this.props.match.path}/:authorId`}
            exact
            render={(props) => {
              const bookId = this.props.match.params.authorId;
              // console.log("bookId", bookId);

              // const author = this.props.authors.find(({ id }) => id === bookId);
              return (
                <p>{bookId} </p>
                // this.props.authors.find(({ id }) => id === bookId) && (
                //   <AuthorDetail {...props} books={this.state.authors.books} />
                // )
              );
            }}
            // component={AuthorDetail}
          />
        )}
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
