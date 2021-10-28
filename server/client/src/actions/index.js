import axios from "axios";

import {
  COLS_ADDED, COLS_MATCHED,
  COLS_SAVE, COLS_ALL, COLS_BYID
} from './types'

export const addColumns = (colsState) => {
  return {
    type: COLS_ADDED,
    payload: colsState,
  };
};

export const matchColumns = (colsState) => {
  return {
    type: COLS_MATCHED,
    payload: colsState,
  };
};


//const SCHEMA_DELETE = "SCHEMA_DELETE";

export const saveSchema = (inputObj) => dispatch => {
  console.log('saveSchema inputObj  ' + JSON.stringify(inputObj));
  
  //{"saveCols":{"name":"test2","columnList":["col1","col2","col3"]}}
  const saveObj = {
    name: inputObj.saveCols.name,
    colList: inputObj.saveCols.columnList,
  };
  // goes into:
  // const addedColList = new ColumnSavedSchema({
  //   name: req.body.name,
  //   columnlist: req.body.colList,
  // })

  axios.post("http://localhost:5000/saveSchema", saveObj)
  .then(function (response) {
    dispatch({ type: COLS_SAVE, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const useSchema = () => dispatch => {
  axios.get("https://localhost:5000/")
  .then(function (response) {
    dispatch({ type: COLS_ALL, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getSchemaById = (selectId) => dispatch => {
  axios.get(`https://localhost:5000/${selectId}`)
  .then(function (response) {
    dispatch({ type: COLS_BYID, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}