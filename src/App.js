import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView.js";
import AuthorsView from "./views/AuthorsView/AuthorsView.js";
import BooksView from "./views/BooksView/BooksView.js";
import BookDetails from "./views/BookDetails/BookDetails.js";
import NotFound from "./views/NotFound/NotFound.js";
import MoviesView from "./views/MoviesView/MoviesView.js";
import MovieDetail from "./views/MovieDetail/MovieDetail.js";

const linkStyles = {
  base: {
    color: "black",
  },
  active: {
    color: "blue",
  },
};
const App = () => {
  return (
    <div className="App-header">
      <ul className="NavigationList">
        <li className="Navigation-item">
          <NavLink
            exact
            to="/"
            style={linkStyles.base}
            activeStyle={linkStyles.active}
          >
            Home
          </NavLink>
        </li>
        <li className="Navigation-item">
          <NavLink
            to="/authors"
            style={linkStyles.base}
            activeStyle={linkStyles.active}
          >
            Authors
          </NavLink>
        </li>
        <li className="Navigation-item">
          <NavLink
            to="/books"
            style={linkStyles.base}
            activeStyle={linkStyles.active}
          >
            Books
          </NavLink>
        </li>
        <li className="Navigation-item">
          <NavLink
            to="/movies"
            style={linkStyles.base}
            activeStyle={linkStyles.active}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books" exact component={BooksView} />
        <Route path="/books/:bookId" component={BookDetails} />
        <Route path="/movies" exact component={MoviesView} />
        <Route path="/3/movie" component={MovieDetail} />
        {/* https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US */}

        <Route component={NotFound} />
      </Switch>
      {/* <Redirect to="/" /> */}
    </div>
  );
};

export default App;
