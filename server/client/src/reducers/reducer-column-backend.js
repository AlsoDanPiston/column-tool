const DEFAULT_STATE = {
  id: 0,
  colName: '',
  colSaveArray: [],
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'COLS_SAVE': {
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        columnList: action.payload.columnList,
      }
    }
    case 'COLS_BYID': {
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        columnList: action.payload.columnList,
      }
    }
    default:
      return state;
  }
}