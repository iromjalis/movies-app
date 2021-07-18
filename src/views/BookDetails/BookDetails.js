import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./BookDetail.css";
import Axios from "axios";

class BookDetails extends PureComponent {
  state = {
    book: [],
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await Axios.get(`http://localhost:4040/books/${bookId}`);
    console.log(response);
    this.setState({ book: response.data });

    return response.data;
  }

  render() {
    //*/books
    // console.log(this.props.match.url);
    const { id, descr, genre, imgUrl, title } = this.state.book;
    return (
      <div className="BooksViewWrapper">
        Book detail:
        <b> {this.props.match.params.bookId}</b>
        <ul>
          <li key={id}>
            <img src={imgUrl} alt={title} />
            <h1>{title}</h1>
            <p>{genre} </p>
            <p>{descr} </p>
          </li>
        </ul>
      </div>
    );
  }
}

BookDetails.propTypes = {
  // bla: PropTypes.string,
};

BookDetails.defaultProps = {
  // bla: 'test',
};

export default BookDetails;
