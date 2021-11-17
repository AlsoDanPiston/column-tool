import React from 'react';

export default function BuildSqlScript(obj, names) {
  let sqlSelectStr = '';

  //   inputCols: (3) ['C', 'D', 'E']
// newColNameList: (2) ['b', 'a']
// newPositionList: (3) ['1', 'drop', '0']
// tableName: "tbl"

  let j = 0;
  for (let i = 0; i < obj.newPositionList.length; i++) {
    if (obj.newPositionList[i] !== 'drop') {
      if (i < obj.newColNameList.length - 1) {
        sqlSelectStr += '  ' + names[obj.newPositionList[i]] + ' AS ' + obj.newColNameList[j] + ',\n';
      } else {
        sqlSelectStr += '  ' + names[obj.newPositionList[i]] + ' AS ' + obj.newColNameList[j];
      }
      j++;
    }
  };

  return (
    <div>
      <div>SELECT</div>
      <div className="pad-left-script">{sqlSelectStr}</div>
      <div>INTO</div>
      <div className="pad-left-script">tblNew{obj.tableName}</div>
      <div>FROM</div>
      <div className="pad-left-script">{obj.tableName}</div>
    </div>);
};