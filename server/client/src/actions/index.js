const COLS_ADDED = "COLS_ADDED";
const COLS_ADJUSTED = "COLS_ADJUSTED";

export const addColumns = (colsState) => {
  return {
    type: COLS_ADDED,
    payload: colsState,
  };
};

export const adjustColumns = (scriptInfoObj) => {
  return {
    type: COLS_ADJUSTED,
    payload: scriptInfoObj,
  }
}