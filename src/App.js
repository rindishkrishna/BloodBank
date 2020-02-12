import React from "react";
import Context from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chart from './components/chart/Chart';

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path='/'>
            <button className="btn btn-dark" >assdsdaf</button>
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
