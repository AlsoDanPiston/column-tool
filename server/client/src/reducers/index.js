import { combineReducers } from "redux";
import ColumnsReducer from "./reducer-columns.js";
import MatchReducer from "./reducer-match.js"

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  matches: MatchReducer,
});

export default rootReducer;