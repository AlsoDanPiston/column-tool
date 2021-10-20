const DEFAULT_STATE = {
  newPositionList: [],
  newColNameList: [],
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'COLS_MATCHED': {
      return {
        ...state,
        newPositionList: action.payload.matchState.newPositionList,
        newColNameList: action.payload.matchState.newColNameList,
      }
    }
    default:
      return state;
  }
}
