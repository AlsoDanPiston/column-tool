import { COLS_SAVE, COLS_ALL, COLS_BYID } from '../actions/types'

const DEFAULT_STATE = {
  id: 0,
  colName: '',
  colSaveArray: [],
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'COLS_SAVE': {
      console.log('COLS_SAVE payoad.data ' + action.payload.data)
      return {
        ...state,
        id: action.payload._id,
        name: action.payload.name,
        columnList: action.payload.columnList,
      }
    }
    case 'COLS_ALL': {
      return {
        ...state
      }
    }
    case 'COLS_BYID': {
      return {
        ...state
      }
    }
    default:
      return state;
  }
}