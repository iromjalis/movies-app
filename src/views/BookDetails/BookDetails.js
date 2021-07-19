import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./BookDetail.css";
import Axios from "axios";

class BookDetails extends PureComponent {
  state = {
    id: null,
    descr: null,
    genre: null,
    imgUrl: null,
    title: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await Axios.get(`http://localhost:4040/books/${bookId}`);

    this.setState({ ...response.data });

    return response.data;
  }

  render() {
    const { id, descr, genre, imgUrl, title } = this.state;

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
