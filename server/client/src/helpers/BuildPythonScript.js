// Create python script with dropList and origNamesInNewOrder
  // drop columns if there are any to drop
  export default function BuildPythonScript(obj, names, drops) {
    let scriptDropPythonPandas = '';

    if (drops.length > 0) {
    scriptDropPythonPandas += 
    `${obj.tableName}New = ${obj.tableName}.drop([${drops}], axis=1)\n`;
    } 

    // rename what is left, make a list newColList using the newnames
    const scriptRenamePythonPandas = 
    `${obj.tableName}New.columns = [${names}]`;

    // reorder what is left, make a list newColOrderList using the new index
    const scriptReorderPythonPandas = 
    `${obj.tableName}New = ${obj.tableName}New[[${obj.newColNameList}]]`;

    // combine the python results
    return scriptDropPythonPandas + '\n' + scriptRenamePythonPandas + '\n' + scriptReorderPythonPandas;
  };