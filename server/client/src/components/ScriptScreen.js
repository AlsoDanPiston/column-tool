import { ScrollSpy } from "bootstrap";


export default function ScriptScreen() {
  // read in ScriptInfoObject from state
  // for now use a fake one
  const scriptInfoObject = {
    origColNameList: ['firstName', 'lastName', 'accountNumber', 'DOB', 'SSN'],
    newPositionList: [2, 1, 0, 'drop', 'drop'],
    newColNameList: ['Account_Number', 'Last_Name', 'First_Name'],
  }

  // initialize arrays to build script with
  let dropList = []; 
  let origNamesInNewOrder= new Array(scriptInfoObject.newColNameList.length).fill('a');

  for (let i = 0; i < scriptInfoObject.origColNameList; i++) {
    if (scriptInfoObject.newPositionList[i] == 'drop') {
      dropList.push(scriptInfoObject.origColNameList[i]);
    } else {
      let indexNumber = newPositionList[i];
      origNamesInNewOrder[indexNumber] = scriptInfoObject.origColNameList[i];
    }
  };


  // // if no newName, skip it
  // // make sure no comma on last one
  // const scriptSQL = 
  // ` SELECT 
  //     {origColNameList[0]} AS {newName[0]},
  //     {origName[1]} AS {newName[1]}
  //   INTO
  //     tblNew{tableName}
  //   FROM
  //     {tableName}`;

  // // if no newName: add ' to the list elements, make a list dropColList
  // const scriptDropPythonPandas = 
  // ` {tableName}New = {tableName}.drop([{dropColList}], axis=1)`;

  // // rename what is left, make a list newColList using the newnames
  // const scriptRenamePythonPandas = 
  // ` {tableName}New.columns = [{newColList}]`

  // // reorder what is left, make a list newColOrderList using the new index
  // const scriptReorderPythonPandas = 
  // ` {tableName}New = {tableName}New[[{newColOrderList}]]`

  // // combine the python results
  // const scriptPython = scriptDropPythonPandas + '\n' + scriptRenamePythonPandas + '\n' + scriptReorderPythonPandas

  // decide which to display by which button was clicked
  let scriptToDisplay = 'sql';

  // const chooseSQL = (e) => {
  //   e.preventDefault();
  //   scriptToDisplay = 'sql'
  // };

  // const choosePython = (e) => {
  //   e.preventDefault();
  //   scriptToDisplay = 'python'
  // }

  // if scriptToDisplay = python, return scriptPython.  if = sql, return scriptSQL
  const scriptChosen = () => (scriptToDisplay = 'sql' ) ? scriptSQL : scriptPython;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button type="button" className="btn btn-primary" onClick={chooseSQL}>SQL</button>
            <br />
            <button type="button" className="btn btn-primary" onclick={choosePython}>SQL</button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-8">
          display the script here and make it look like a pretty textbox of code
          do a ternary here to decide which one to display
          {scriptChosen}
          </div>
        </div>
      </div>
      
    </div>
  )

}