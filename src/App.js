import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App-header">
      <Link
        to={{
          pathname: "/books",
          search: "?category=adventure",
          hash: "#treasure-island",
          state: { from: "/dashboard" },
        }}
      />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
