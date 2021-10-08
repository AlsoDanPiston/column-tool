import { combineReducers } from "redux";
import ColumnsReducer from "./reducer-columns.js";

const rootReducer = combineReducers({
  columns: ColumnsReducer,
});

export default rootReducer;