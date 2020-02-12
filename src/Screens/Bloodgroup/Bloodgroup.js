import React from 'react';
import './Bloodgroup.scss';
export default function Blood() {

  return (
    <div className="container main">
      <div className="row justify-content-around pad">
        <div className="">
          <button className="btb">
            <text className="btb-text">A+</text>
          </button>
        </div>
        <div className="">
          <button className="btb">
            <text className="btb-text">O+</text>
          </button>
        </div>
      </div>
      <div className="row justify-content-around pad">
        <div className="">
          <button className="btb">
            {' '}
            <text className="btb-text">B+</text>
          </button>
        </div>
        <div className="">
          <button className="btb">
            {' '}
            <text className="btb-text">AB+</text>
          </button>
        </div>
      </div>
      <div className="row justify-content-around pad">
        <div className="">
          <button className="btb">
            {' '}
            <text className="btb-text">B+</text>
          </button>
        </div>
        <div className="">
          <button className="btb">
            {' '}
            <text className="btb-text">AB+</text>
          </button>
        </div>
      </div>
      <div className="row justify-content-around ">
        <div> </div>
        <button className="btn btn-danger red">Next</button>
      </div>
    </div>
  );
}
