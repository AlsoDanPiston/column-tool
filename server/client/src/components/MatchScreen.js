import React from 'react';
import { render } from 'react-dom';
import {  useSelector } from "react-redux";

export default function MatchScreen() {
  const inputList = useSelector((state => state.columns.inputCols))
  const outputList = useSelector((state => state.columns.inputCols))

  // set up object to hold original column name, new position, new column name as 3 separate arrays
  // new column name will be 'drop' if not included, will rely on array index to keep track of order of 
  // all three lists together
  const scriptInfoObject = {
    origColNameList: inputList,
    newPositionList: [],
    newColNameList: [],
  }

  // create a set of <li>'s tagged by number from inputList and one for outputList also tagged by number
  // put a box around them in style here
  function RenderLeftSideList() {
    let i = 0;

    if (inputList.length > 0) {
      return inputList.map((colName) => (
        <div className="col-sm-3 p-2 m-4">
          <li id={i}>{colName}</li>
        </div>
      ));
    }
  }


  // refactor to make one function that reads in whichever list
  function RenderRightSideList() {
    let i = 0;

    if (outputList.length > 0) {
      return outputList.map((colName) => (
        <div className="col-sm-3 p-2 m-4">
          <li id={i}>{colName}</li>
        </div>
      ));
    }
  }

  // set up object to tell if an output fields is taken (1) or left empty (0)
  const usedList = outputList ? new Array(outputList.length).fill(0) : []

  const outputColTrackerObject = {
    outputCols: outputList,
    used: usedList,
  }

  // set scriptInfoObject to state using dispatcing action to COLS_ADJUSTED to the reducer-script-info.js

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <h4>Input</h4>
            <hr/>
            <ul className="input-columns list-unstyled">
              <  RenderLeftSideList />
            </ul>
            <hr/>
          </div>
          <div className="col-md-6">
            <h4>Schema</h4>
            <hr/>
            <ul className="schema-columns list-unstyled">
              < RenderRightSideList />
            </ul>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  )
}