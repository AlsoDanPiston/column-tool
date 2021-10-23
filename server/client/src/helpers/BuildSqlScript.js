import React from 'react';

export default function BuildSqlScript(obj, names) {
  let sqlSelectStr = '';

  for (let i = 0; i < obj.newColNameList.length; i++) {
    if (i < obj.newColNameList.length - 1) {
      sqlSelectStr += '  ' + names[i] + ' AS ' + obj.newColNameList[i] + ',\n';
    } else {
      sqlSelectStr += '  ' + names[i] + ' AS ' + obj.newColNameList[i];
    }
};

// make this a list with <br>'s?
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