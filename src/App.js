import React from 'react';
import Context from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chart from './components/chart/Chart';
import Bloodgroup from './Screens/Bloodgroup/Bloodgroup';

function App() {
  return (
    <Context>
      <Router>
        <Switch>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/">
            <Bloodgroup />
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
