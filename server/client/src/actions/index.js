import axios from "axios";

// front-end actions
const COLS_ADDED = "COLS_ADDED";
const COLS_MATCHED = "COLS_MATCHED";

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

// back-end actions
const COLS_SAVE = "COLS_SAVE";
const COLS_ALL = "COLS_ALL";
//const SCHEMA_DELETE = "SCHEMA_DELETE";

export const saveSchema = () => {
  console.log('at saveSchema action');
  
  const ROOT_URL = "http://localhost:5000/saveSchema";

  const request = axios.get(`${ROOT_URL}`);

  return {
    type: COLS_SAVE,
    payload: request,
  };
}

export const useSchema = () => {
  const ROOT_URL = "http://localhost:5000/";

  const request = axios.get(`${ROOT_URL}`);

  return {
    type: COLS_ALL,
    payload: request,
  };
}