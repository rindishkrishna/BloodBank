import React from 'react';
import Context from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chart from './Components/subcomponent/chart/Chart'

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/">
            <h1>safasf</h1>
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
