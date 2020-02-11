import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

  function Fouter(){
    return(
        <Router>
            <Link to="/">Homepage  </Link>
            <Link to="/Dashboard">dash</Link>
        </Router>
    );
}
export default Fouter;
