import React,{Component}from 'react';
import Context from './Context';
import Router from "./Router";

function App() {
  return (
      <Context>
          <Router>
        <div >

          <h1> Tarun poorimon</h1>
        </div>
          </Router>
      </Context>
);

}

export default App;
