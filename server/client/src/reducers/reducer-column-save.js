const DEFAULT_STATE = {
  id: 0,
  colName: '',
  colSaveArray: [],
}

export default function(state = DEFAULT_STATE, action) {
  console.log('column save reducer payload: ' + action.payload);

  switch (action.type) {
    case 'COLS_SAVE': {
      return {
        ...state,
        id: action.payload._id,
        colName: action.payload.name,
        colSaveArray: action.payload.colSaveArray,
      }
    }
    default:
      return state;
  }
}