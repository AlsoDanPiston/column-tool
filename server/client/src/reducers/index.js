import { combineReducers } from "redux";
import ColumnsReducer from "./reducer-columns.js";
import MatchReducer from "./reducer-match.js"
import ColumnBackendReducer from "./reducer-column-backend.js"  
import GetAllColumnsReducer from "./reducer-get-all.js"

const rootReducer = combineReducers({
  columns: ColumnsReducer,
  matches: MatchReducer,
  backend: ColumnBackendReducer,
  manage: GetAllColumnsReducer,
});

export default rootReducer;