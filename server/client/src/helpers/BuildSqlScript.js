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
  return `SELECT
${sqlSelectStr}
INTO
tblNew${obj.tableName}
FROM
${obj.tableName}`;
}