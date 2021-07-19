import React, { Component } from "react";
import { Link } from "react-router-dom";

const AuthorDetail = ({ books }) => {
  return <p>books</p>;
  // return ( <ul>
  //             { books.length>0 && { books.map((book) => (
  //         <li key={book.id}><Link to={`/books/${book.id}`} /></li>
  //       ))}  }
  //     </ul> );
};

export default AuthorDetail;
