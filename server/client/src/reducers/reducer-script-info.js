// export const adjustColumns = (scriptInfoObj) => {
//   return {
//     type: COLS_ADJUSTED,
//     payload: scriptInfoObj,
//   }
// }

// const DEFAULT_STATE = {
//   origColNameList: [],  // inputList
//   newPositionList: [],
//   newColNameList: [],
// }

// export default function(state = DEFAULT_STATE, action) {
//   switch (action.type) {
//     case 'COLS_ADJUSTED': {
//       return {
//         ...state,
//         origColNameList: action.payload.inputState.newInputCols,
//         outputCols: action.payload.inputState.newOutputCols,
//         tableName: action.payload.inputState.tableName,
//       }
//     }
//     default:
//       return state;
//   }
// }