import axios from "axios";

import {
  COLS_ADDED, COLS_MATCHED,
  COLS_SAVE, COLS_ALL, COLS_BYID, COLS_DELETE
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

export const saveSchema = (inputObj) => dispatch => {
  const saveObj = {
    name: inputObj.saveCols.name,
    colList: inputObj.saveCols.columnList,
  };

  axios.post("http://localhost:5000/saveSchema", saveObj)
  .then(function (response) {
    dispatch({ type: COLS_SAVE, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const fetchSchema = (data) => dispatch => {
  axios.get("http://localhost:5000/")
  .then(function (response) {
    dispatch({ type: COLS_ALL, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getSchemaById = (selectId) => dispatch => {
  axios.get(`http://localhost:5000/${selectId}`)
  .then(function (response) {
    dispatch({ type: COLS_BYID, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deleteSchema = (selectId) => dispatch => {
  axios.delete(`http://localhost:5000/delete/${selectId}`)
  .then(function (response) {
    dispatch({ type: COLS_DELETE, payload: response.data})
  })
  .catch(function (error) {
    console.log(error);
  });
}