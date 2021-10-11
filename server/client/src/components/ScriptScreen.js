import React from 'react';


export default function ScriptScreen() {
  // read in ScriptInfoObject from state
  // for now use a fake one
  const scriptInfoObject = {
    origColNameList: ['firstName', 'lastName', 'accountNumber', 'DOB', 'SSN'],
    newPositionList: [2, 1, 0, 'drop', 'drop'],
    newColNameList: ['Account_Number', 'Last_Name', 'First_Name'],
    tableName: 'AcctNumCrosswalk',
  }

  // initialize arrays to build script with
  let dropList = []; 
  let origNamesInNewOrder = new Array(scriptInfoObject.newColNameList.length).fill('a');

  for (let i = 0; i < scriptInfoObject.origColNameList.length; i++) {

    if (scriptInfoObject.newPositionList[i] === 'drop') {
      dropList.push(scriptInfoObject.origColNameList[i]);
    } else {
      let indexNumber = scriptInfoObject.newPositionList[i];
      origNamesInNewOrder[indexNumber] = scriptInfoObject.origColNameList[i];
    }
  };
  
  // build SQL query
  let sqlSelectStr = '';

  for (let i = 0; i < scriptInfoObject.newColNameList.length; i++) {
    if (i < scriptInfoObject.newColNameList.length - 1) {
      sqlSelectStr += '  ' + origNamesInNewOrder[i] + ' AS ' + scriptInfoObject.newColNameList[i] + ',\n';
    } else {
      sqlSelectStr += '  ' + origNamesInNewOrder[i] + ' AS ' + scriptInfoObject.newColNameList[i];
    }
  };

  const scriptSQL = 
   `SELECT 
${sqlSelectStr}
INTO
  tblNew${scriptInfoObject.tableName}
FROM
  ${scriptInfoObject.tableName}`;

  // Create python script with dropList and origNamesInNewOrder
  // drop columns if there are any to drop

  let scriptDropPythonPandas = '';

  if (dropList.length > 0) {
   scriptDropPythonPandas += 
  `${scriptInfoObject.tableName}New = ${scriptInfoObject.tableName}.drop([${dropList}], axis=1)\n`;
  } 

  // rename what is left, make a list newColList using the newnames
  const scriptRenamePythonPandas = 
  `${scriptInfoObject.tableName}New.columns = [${origNamesInNewOrder}]`;

  // reorder what is left, make a list newColOrderList using the new index
  const scriptReorderPythonPandas = 
  `${scriptInfoObject.tableName}New = ${scriptInfoObject.tableName}New[[${scriptInfoObject.newColNameList}]]`;

  // combine the python results
  const scriptPython = scriptDropPythonPandas + scriptRenamePythonPandas + '\n' + scriptReorderPythonPandas;

  // decide which to display by which button was clicked - default to sql
  let scriptToDisplay = 'sql';

  const chooseSQL = (e) => {
    e.preventDefault();
    scriptToDisplay = 'sql';
  };

  const choosePython = (e) => {
    e.preventDefault();
    scriptToDisplay = 'python';
  }

  // if scriptToDisplay = python, return scriptPython.  if = sql, return scriptSQL
  const scriptChosen = (scriptToDisplay === 'sql') ? scriptSQL : scriptPython;

  console.log(scriptToDisplay);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <button type="button" className="btn btn-primary" onClick={chooseSQL}>SQL</button>
            <br />
            <button type="button" className="btn btn-primary" onClick={choosePython}>Python (pandas)</button>
          </div>

          <div className="col-md-8">
            {scriptChosen}
          </div>
        </div>
      </div>
      
    </div>
  )
}