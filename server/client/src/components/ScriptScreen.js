import React, { useState } from 'react';
import styled from 'styled-components';

import BuildPythonScript from '../helpers/BuildPythonScript';
import BuildSqlScript from '../helpers/BuildSqlScript';


export default function ScriptScreen() {

  const [script, setScript] = useState("");

  // read in ScriptInfoObject from state
  // for now use a fake one
  const scriptInfoObject = {
    inputCols: ['firstName', 'lastName', 'accountNumber', 'DOB', 'SSN'],
    newPositionList: [2, 1, 0, 'drop', 'drop'],
    newColNameList: ['Account_Number', 'Last_Name', 'First_Name'],
    tableName: 'AcctNumCrosswalk',
  }

  // initialize arrays to build script with
  let dropList = []; 
  let origNamesInNewOrder = new Array(scriptInfoObject.newColNameList.length).fill('a');

  for (let i = 0; i < scriptInfoObject.inputCols.length; i++) {
    if (scriptInfoObject.newPositionList[i] == 'drop') {
      dropList.push(scriptInfoObject.inputCols[i]);
    } else {
      let indexNumber = scriptInfoObject.newPositionList[i];
      origNamesInNewOrder[indexNumber] = scriptInfoObject.inputCols[i];
    }
  };

  const sqlScript = BuildSqlScript(scriptInfoObject, origNamesInNewOrder);
  const pyScript = BuildPythonScript(scriptInfoObject, origNamesInNewOrder, dropList);

  // **** THESE CONSOLE LOG NICELY BUT DISPLAY IN JSX WONKY, PYTHON HAS EXTRA LINE, SQL HAS NO LINE BREAKS *****
  //********************************* */
  console.log(sqlScript);
  console.log(pyScript);

  const handleScriptSelect = (e) => {
    console.log(e.target.value);

    let outputScript = '';

    if (e.target.value == 'SQL') {
      outputScript = sqlScript;
    } else if (e.target.value == 'Python') {
      outputScript = pyScript;
    } else {
      console.log('error, somehow a language that was not planned for was selected');
    }

    setScript(outputScript);
  }

  return (
    <div>
      <ScriptScreenStyle>
        <div className="container project-format">
        <div className="row">
            <br/>
            <h4 className="text-center" style={{color: "#591C0B"}}><strong>Select the language and copy the script to paste in your analysis script</strong></h4>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col-md-4 text-center">
              <button type="button" className="btn btn-primary button-size" value='SQL' onClick={handleScriptSelect}>SQL</button>
              <br />
              <button type="button" className="btn btn-primary button-size" value='Python' onClick={handleScriptSelect}>Python (pandas)</button>
            </div>

            <div className="col-md-8">
              <ScriptTextBoxStyle>
                <div>
                  {script}
                </div>
              </ScriptTextBoxStyle>
            </div>
          </div>
        </div>
      </ScriptScreenStyle>
    </div>
  )
}

const ScriptScreenStyle = styled.div`
  background: #EEEEEE;
  margin: 2em;
  padding-top: 25px;
  padding-bottom: 125px;
`;

const ScriptTextBoxStyle = styled.div`
  background: white;
  border-style: inset;
  padding: 12px;
  font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;
`;