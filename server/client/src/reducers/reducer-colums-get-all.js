const DEFAULT_STATE = {
  id: 0,
  name: '',
  columnlist: [],
}

export default function(state = DEFAULT_STATE, action) {
  console.log('column get all reducer payload: ' + action.payload);

  switch (action.type) {
    case 'COLS_SAVE': {
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        columnlist: action.payload.columnlist,
      }
    }
    default:
      return state;
  }
}