import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { SVG } from '@svgdotjs/svg.js'
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
  let coordArr = [];

  // set area for svg lines to be drawn
  const xAreaSize = window.innerWidth / 12 * 2;
  // y area is number of buttons max of input or output list * 35 (button height + padding)
  const yAreaSize = Math.max(inputList.length, outputList.length) * 35 + 207;
  let draw = '';


  
  useEffect(() => {
    if (draw === '') {
      draw = SVG().addTo('#line-area').size(xAreaSize, yAreaSize);
    }
  });

  function RenderLeftSideList() {
     if (inputList.length > 0) {
      return (
        inputList.map((col, i) => {
          return <div><button className="button-match" id={`left-${i}`} index={i} value="left" onClick={buttonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  function RenderRightSideList() {
    if (outputList.length > 0) {
      return (
        outputList.map((col, i) => {
          return <div><button className="button-match" id={`right-${i}`} index={i} value="right" onClick={buttonClickHandler}>{col}</button><div/></div>
        })
      );
    }
  }

  const buttonClickHandler = (e) => {
    const index = e.target.getAttribute("index");
    const side = e.target.value;
    const clickedId = e.target.getAttribute("id");

    // newPositionList[leftButtonOutputIndex] = rightButtonOutputIndex
    if (side === 'left') {
      tempLeftIndex = index;
      const selectedButtonX = window.innerWidth / 12 * 5;
      // default height of button is 30 px
      const selectedButtonY = document.getElementById(clickedId).offsetTop - 15;
      coordArr.push([selectedButtonX, selectedButtonY]);
    } else if (side === 'right' & tempLeftIndex >= 0 & !tempArrayBuilder.includes(index)) {
      // won't set until right button clicked, also won't set until left button clicked first
      tempArrayBuilder[tempLeftIndex] = index;
      tempLeftIndex = -1;
      const selectedButtonX = window.innerWidth / 12 * 7;
      // default height of button is 30 px
      const selectedButtonY = document.getElementById(clickedId).offsetTop - 15;
      
      if (coordArr.length > 0) {
        coordArr.push([selectedButtonX, selectedButtonY]);
      }
    } else {
      console.log('that column is already accounted for');
    }

    // Draw line between selected buttons using SVG, top button is 207px from top of screen with current format
    if (coordArr.length === 2) {
      const line = draw.line(coordArr[0][0], coordArr[0][1], coordArr[1][0], coordArr[1][1]).move(-15, 207);
      line.stroke({ color: '#000', width: 5, linecap: 'round' });
      coordArr = [];
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
            <h4 className="text-center"><strong>Click on column on the left and then click column on right to match it up</strong></h4>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <h4>Input</h4>
              <hr/>
              <ul className="input-columns list-unstyled">
                <RenderLeftSideList />
              </ul>
              <hr/>
            </div>
            <div className="col-md-2" id="line-area"></div>
            <div className="col-md-4">
              <h4>Schema</h4>
              <hr/>
              <ul className="schema-columns list-unstyled">
                <RenderRightSideList />
              </ul>
              <hr/>
            </div>
            <div className="col-md-1"></div>
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
