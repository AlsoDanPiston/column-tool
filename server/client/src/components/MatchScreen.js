import React from 'react';
import { render } from 'react-dom';
import {  useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default function MatchScreen() {
  const inputList = useSelector((state => state.columns.inputCols))
  const outputList = useSelector((state => state.columns.outputCols))

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
    // want to be able to show all of input list and save the name of clicked item

    // if another left item is clicked before right item, discard what was clicked

    if (inputList.length > 0) {
      return (
        <div className="col-sm-3 p-2 m-4">
          <button type="button" className="btn btn-primary" onClick={submitMatching}>Col1</button>
        </div>
      );
    }
  }

  const history = useHistory();

  // refactor to make one function that reads in whichever list
  function RenderRightSideList() {
    // want to be able to show all of output list and get the position of list of clicked item

    if (outputList.length > 0) {
      return (
        <div className="col-sm-3 p-2 m-4">
         right side!
        </div>
      );
    }
  }

  // set up object to tell if an output fields is taken (1) or left empty (0)
  const usedList = outputList ? new Array(outputList.length).fill(0) : []

  const outputColTrackerObject = {
    outputCols: outputList,
    used: usedList,
  }

  // set scriptInfoObject to state using dispatcing action to COLS_ADJUSTED to the reducer-script-info.js
  const submitMatching = (e) => {
    e.preventDefault();

    // // These functions will return a list as long as the input was tab or space delimited in the text box
    // const matchState = {
    //   origColNameList: ['firstName', 'lastName', 'accountNumber', 'DOB', 'SSN'],
    //   newPositionList: [2, 1, 0, 'drop', 'drop'],
    //   newColNameList: ['Account_Number', 'Last_Name', 'First_Name'],
    //   tableName: 'AcctNumCrosswalk',
    // }

    // // dispatch action 
    // dispatch(
    //   adjustColumns({
    //     matchState,
    //   })
    // );  

    // set it to go to Match screen here too
    history.push('/script')
  };

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

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm">
            <button type="button" className="btn btn-primary" onClick={submitMatching}>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}