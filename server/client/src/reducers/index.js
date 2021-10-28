import { combineReducers } from "redux";
import ColumnsReducer from "./reducer-columns.js";
import MatchReducer from "./reducer-match.js"
import ColumnBackendReducer from "./reducer-column-backend.js"  

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  matches: MatchReducer,
  backend: ColumnBackendReducer,
});

export default rootReducer;