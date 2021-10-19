
const DEFAULT_STATE = {
  inputCols : [],
  outputCols : [],
  tableName: '',
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // make the things
    case 'COLS_ADDED': {
      return {
        ...state,
        inputCols: action.payload.inputState.newInputCols,
        outputCols: action.payload.inputState.newOutputCols,
        tableName: action.payload.inputState.tableName,
      }
    }
    default:
      return state;
  }
}
