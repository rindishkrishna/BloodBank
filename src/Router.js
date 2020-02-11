import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default  function Router(){
    return(
        <Router>
            <Link to="/">Home </Link>
            <Link to="/Dashboard">Dashboard</Link>
        </Router>
    )
}
