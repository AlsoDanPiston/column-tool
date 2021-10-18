import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

//newPositionList: action.payload.inputState.newPositionList,
//newColNameList: action.payload.inputState.newColNameList,

export default function MatchScreen() {
  const inputList = useSelector((state => state.columns.inputCols))
  const outputList = useSelector((state => state.columns.outputCols))

  const [newPositionList, setNewPositionList] = useState("");
  const [newColNameList, setNewColNameList] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  // ********* ************    If (!data) return <Redirect to=“/“ />




  // create a set of <li>'s tagged by number from inputList and one for outputList also tagged by number
  // put a box around them in style here
  function RenderLeftSideList() {
    // if another left item is clicked before right item, discard what was clicked

    if (inputList.length > 0) {
      return (
        inputList.map((col, i) => {
          return <div><button class="button-size-match" index={i} value={col} side='Left' onClick={leftButtonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  const buttonClickHandler = (e) => {
    e.preventDefault;
    // newPositionList[leftButtonOutput] = rightButtonOutput
    const index = e.target.getAttribute("index");
    const side = e.target.getAttribute("side");

    return [side, index];
  }

  function RenderRightSideList() {
    // if another left item is clicked before right item, discard what was clicked

    if (outputList.length > 0) {
      return (
        outputList.map((col, i) => {
          return <div><button class="button-size-match" index={i} side=" right" value={col} onClick={buttonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  // newPositionList[leftButtonOutputIndex] = rightButtonOutputIndex


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
    // const DEFAULT_STATE = {
    //   inputCols : [],
    //   newPositionList: [],
    //   outputCols : [],
    //   newColNameList: [],
    //   tableName: '',
    // }

    // dispatch action 
    dispatch(
      matchColumns({
        matchState,
      })
    );  

    // set it to go to Script screen here
    history.push('/script')
  };

  return (
    <div>
      <MatchScreenStyle>
        <div className="container text-center">
        <div className="row">
            <br/>
            <h4 className="text-center" style={{color: "#591C0B"}}><strong>Click on column on the left and then click column on right to match it up</strong></h4>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-md-6">
              <h4>Input</h4>
              <hr/>
              <ul className="input-columns list-unstyled">
                <RenderLeftSideList />
              </ul>
              <hr/>
            </div>
            <div className="col-md-6">
              <h4>Schema</h4>
              <hr/>
              <ul className="schema-columns list-unstyled">
                <RenderRightSideList />
              </ul>
              <hr/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-3">
              <br/>
              <button type="button" className="btn btn-primary button-size" onClick={submitMatching}>Next Step</button>
            </div>
          </div>
        </div>
      </MatchScreenStyle>
    </div>
  )
}

const MatchScreenStyle = styled.div`
  background: #EEEEEE;
  margin: 2em;
  padding-top: 25px;
  padding-bottom: 125px;
`;