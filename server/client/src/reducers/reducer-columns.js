
const DEFAULT_STATE = {
  InputCols : [],
  OutputCols : [],
  tableName: '',
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // make the things
    case 'COLS-ADDED': {
      return {
        ...state,
        InputCols: action.payload.newInputCols,
        OutputCols: action.payload.data.newOutputcols,
        tableName: action.payload.data.tableName,
      }
    }
    default:
      return state;
  }
}