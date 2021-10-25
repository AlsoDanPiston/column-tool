import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import ParsePastedInputs from '../helpers/ParsePastedInputs';
import { addColumns } from '../actions';
import { useHistory } from 'react-router-dom';

export default function HomeScreen() {

  const [outputCols, setOutputCols] = useState("");
  const [inputCols, setInputCols] = useState("");
  const [tableName, setTableName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submitLists = (e) => {
    e.preventDefault();

    // These functions will return a list as long as the input was tab or space delimited in the text box
    const inputState = {
      newOutputCols : ParsePastedInputs(outputCols),
      newInputCols : ParsePastedInputs(inputCols),
      tableName: tableName,
    }

    // make these required before hitting 'Next' button




    // dispatch action 
    dispatch(
      addColumns({
        inputState,
      })
    );  

    // clear form input after submission
    setOutputCols('');
    setInputCols('');
    setTableName('');

    // set it to go to Match screen here too
    history.push('/match')
  };

  return (
    <div className="screen-div">
      <div className="container font-link project-format">
        <div className="row">
          <br/>
          <h1 className="text-center"><strong>Column Fixer</strong></h1>
        </div>
        <br/>
        <br/>
        <div className="row">
          <h5>Paste in Schema Columns you wish you had (either seperated by comma or pasted top row of Excel sheet):</h5>
          <input 
            className="form-control" 
            type="text" 
            value={outputCols}
            onChange={(e) => setOutputCols(e.target.value)}>
          </input>
        </div>
        <br/>
    
        <div className="row">
          <h5>Paste in Input Columns you currently have (either seperated by comma or pasted top row of Excel sheet):</h5>
          <input 
            className="form-control" 
            type="text" 
            value={inputCols}
            onChange={(e) => setInputCols(e.target.value)}>
          </input>
        </div>
        <br/>
      
        <div className="row">
          <h5>Input table/dataframe name:</h5>
          <input 
            className="form-control" 
            type="text" 
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}>
          </input>
        </div>
        <br/>
        <br/>
      </div>

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-3">
            <button type="button" className="btn btn-primary button-size" onClick={submitLists}>Next ></button>
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-info button-size">Save Schema</button>
          </div>
          <div className="col-md-3">
            <button type="button" className="btn btn-info button-size" onClick={() => history.push('/manage')}>Manage Schema</button>
          </div>
        </div>
      </div>
    </div> )
}








