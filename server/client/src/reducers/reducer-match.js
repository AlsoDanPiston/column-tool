const DEFAULT_STATE = {
  inputCols : [],
  newPositionList: [],
  outputCols : [],
  newColNameList: [],
  tableName: '',
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // make the things
    case 'COLS_MATCHED': {
      return {
        ...state,
        newPositionList: action.payload.inputState.newPositionList,
        newColNameList: action.payload.inputState.newColNameList,
      }
    }
    default:
      return state;
  }
}
