import { combineReducers } from "redux";
import picsReducer from "./images/reducers";

const rootReducer = combineReducers({
  picsReducer,
});

export default rootReducer;
