import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
//import { Test } from './BooksView.styles';
import Axios from "axios";

class BooksView extends PureComponent {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get("http://localhost:4040/books");

    this.setState({ books: response.data });
    return response.data;
  }

  render() {
    //*/books
    // console.log(this.props.match.url);
    return (
      <div className="BooksViewWrapper">
        Books list:
        <ul>
          {this.state.books.map((book) => (
            <li key={book.id}>
              <Link to={`/${this.props.match.url}/${book.id}`}>
                {" "}
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

BooksView.propTypes = {
  // bla: PropTypes.string,
};

BooksView.defaultProps = {
  // bla: 'test',
};

export default BooksView;
