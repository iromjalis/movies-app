import React from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView.js";
import AuthorsView from "./views/AuthorsView/AuthorsView.js";
import BooksView from "./views/BooksView/BooksView.js";
import NotFound from "./views/NotFound/NotFound.js";

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
      </ul>

      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books" component={BooksView} />
        <Route component={NotFound} />
      </Switch>
      {/* <Redirect to="/" /> */}
    </div>
  );
};

export default App;
