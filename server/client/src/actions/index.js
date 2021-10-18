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
  }
}