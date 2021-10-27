import { combineReducers } from "redux";
import ColumnsReducer from "./reducer-columns.js";
import MatchReducer from "./reducer-match.js"
import ColumnSaveReducer from "./reducer-column-save.js"

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  matches: MatchReducer,
  save: ColumnSaveReducer,
});

export default rootReducer;