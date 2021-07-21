import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
// import AuthorsView from "./views/AuthorsView/AuthorsView.js";
// import BooksView from "./views/BooksView/BooksView.js";
// import BookDetails from "./views/BookDetails/BookDetails.js";
import NotFound from "./views/NotFound/NotFound.js";
import MoviesView from "./views/MoviesView/MoviesView.js";
import MovieDetail from "./views/MovieDetail/MovieDetail.js";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App-header">
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomeView} />
        {/* <Route path="/authors" component={AuthorsView} />
        <Route path="/books" exact component={BooksView} />
        <Route path="/books/:bookId" component={BookDetails} /> */}
        <Route path="/movies" exact component={MoviesView} />
        <Route path="/movies/:id" component={MovieDetail} />

        <Route component={NotFound} />
      </Switch>
      <Redirect to={{ pathname: "/" }} />
    </div>
  );
};

export default App;
