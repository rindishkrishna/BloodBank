import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/">
            <h1>safasf</h1>
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
