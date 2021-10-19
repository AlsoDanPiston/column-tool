import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import { matchColumns } from '../actions';

//newPositionList: action.payload.inputState.newPositionList,
//newColNameList: action.payload.inputState.newColNameList,

export default function MatchScreen() {
  const inputList = useSelector((state => state.columns.inputCols))
  const outputList = useSelector((state => state.columns.outputCols))

  const dispatch = useDispatch();
  const history = useHistory();

  // initialize array of zeroes to update as buttons get clicked
  // make them all start as 'drop'
  let tempArrayBuilder = new Array(outputList.length).fill('drop');
  let tempLeftIndex = -1;

  // ********* ************    If (!data) return <Redirect to=“/“ />



  function RenderLeftSideList() {
     if (inputList.length > 0) {
      return (
        inputList.map((col, i) => {
          return <div><button className="button-match" key={i} index={i} value='left' onClick={buttonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  const buttonClickHandler = (e) => {
    const index = e.target.getAttribute("index");
    const side = e.target.value;

    // newPositionList[leftButtonOutputIndex] = rightButtonOutputIndex
    if (side === 'left') {
      tempLeftIndex = index;
    } else if (side === 'right' & tempLeftIndex >= 0 & !tempArrayBuilder.includes(index)) {
      // won't set until right button clicked, also won't set until left button clicked first
      tempArrayBuilder[tempLeftIndex] = index;
      tempLeftIndex = -1;
    } else {
      console.log('that column is already accounted for');
    }
  }

  function RenderRightSideList() {
    if (outputList.length > 0) {
      return (
        outputList.map((col, i) => {
          return <div><button className="button-match" key={i} index={i} value="right" onClick={buttonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  // set scriptInfoObject to state using dispatcing action to COLS_MATCHED to the reducer-match.js
  const submitMatching = (e) => {
    e.preventDefault();

    // set index to drop if 0, convert new indexes to ints, and drop from outputList before setting state
    let newOutList = [];
    let temp = [];

    temp = tempArrayBuilder.map((colIndex) => {
      if (colIndex !== 'drop') {
        newOutList.push(outputList[colIndex]);
        return colIndex;
      }
      else {
        return 'drop';
      }
    })

    const matchState = {
      newPositionList: temp,
      newColNameList: newOutList
    }

    // set it to error if not all of outputList is selected but give option to continue



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
