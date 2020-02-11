import React,{Component}from 'react';
import Context from './Context';
import Fouter from "./Router";

function App() {
  return (
      <Context>
          <Fouter>
        <div >

          <h1> Tarun poorimon</h1>
        </div>
          </Fouter>
      </Context>
);

}

export default App;
