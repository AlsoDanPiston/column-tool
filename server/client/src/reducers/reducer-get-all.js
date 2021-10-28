const DEFAULT_STATE = {
  data: [],
  loading: true,
}

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'COLS_ALL': {
      return {
        data: action.payload,
        loading: false,
      }
    }
    default:
      return state;
  }
};