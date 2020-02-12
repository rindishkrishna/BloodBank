import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DonerList from "./components/DonerList/DonerList"

function App() {
  return (
    <Context>
      <Router>
        <Switch>
            <Route path="/college">
               <DonerList/>
            </Route>
            <Route path="/">
                d
            </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
