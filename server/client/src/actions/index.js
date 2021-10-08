const COLS_ADDED = "COLS_ADDED";

export const addColumns = (colsState) => {
  return {
    type: COLS_ADDED,
    payload: colsState,
  };
};