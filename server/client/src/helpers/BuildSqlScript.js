import React from 'react';

export default function BuildSqlScript(obj, names) {
  let sqlSelectStr = '';

  console.log(obj);
  console.log(names);

  // inputCols: (3) ['A', 'C', 'B']
  // newColNameList: (3) ['a', 'c', 'b']
  // newPositionList: (4) ['0', '2', '1', 'drop']

  for (let i = 0; i < obj.newColNameList.length; i++) {
    if (i < obj.newColNameList.length - 1) {
      sqlSelectStr += '  ' + names[obj.newPositionList[i]] + ' AS ' + obj.newColNameList[i] + ',\n';
    } else {
      sqlSelectStr += '  ' + names[obj.newPositionList[i]] + ' AS ' + obj.newColNameList[i];
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