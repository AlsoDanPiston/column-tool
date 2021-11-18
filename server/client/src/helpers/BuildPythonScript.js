import React from 'react';

// Create python script with dropList and origNamesInNewOrder
  // drop columns if there are any to drop
export default function BuildPythonScript(obj, names, drops) {
//   inputCols: (3) ['C', 'D', 'E']
// newColNameList: (2) ['b', 'a']
// newPositionList: (3) ['1', 'drop', '0']
// tableName: "tbl"

  let dfSelectStr = '';

  // dfNew = df[[]] subset df
  for (let i = 0; i < obj.newPositionList.length; i++) {
    if (obj.newPositionList[i] !== 'drop') {
      if (i < obj.newColNameList.length - 1) {
        dfSelectStr += '"' + names[obj.newPositionList[i]] + '", ';
      } else {
        dfSelectStr += '"' + names[obj.newPositionList[i]] + '"';
      }
    }
  };

  // get newColNameList with ""s
  let pyLineTwoList = '';
  for (let i = 0; i < obj.newColNameList.length; i++) {
    if (i < obj.newColNameList.length - 1) {
      pyLineTwoList += '"' + obj.newColNameList[i] + '", ';
    } else {
      pyLineTwoList += '"' + obj.newColNameList[i] + '"';
    }
  };

  // subset dataframe into new one
  const pythonLineOne = `${obj.tableName}New = ${obj.tableName}[[${dfSelectStr}]]`

  // rename subsetted dataframe columns
  const pythonLineTwo = `${obj.tableName}New.columns = [${pyLineTwoList}]`

  // combine the python results
  return (<div>
            <div>{pythonLineOne}</div>
            <div>{pythonLineTwo}</div>
          </div>
          );
};