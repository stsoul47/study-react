import { combineReducers } from "redux";
import counter from "./counterModule"; 

const rootReducer = combineReducers({
  counter,
})

export default rootReducer;