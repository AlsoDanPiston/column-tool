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
const SCHEMA_SAVE = "SCHEMA_SAVE";
const SCHEMA_USE = "SCHEMA_USE";
//const SCHEMA_DELETE = "SCHEMA_DELETE";

export const saveSchema = () => {
  const ROOT_URL = "http://localhost:5000/saveSchema";

  const request = axios.get(`${ROOT_URL}`);

  return {
    type: SCHEMA_SAVE,
    payload: request,
  };
}

export const useSchema = () => {
  const ROOT_URL = "http://localhost:5000/useSchema";

  const request = axios.get(`${ROOT_URL}`);

  return {
    type: SCHEMA_USE,
    payload: request,
  };
}