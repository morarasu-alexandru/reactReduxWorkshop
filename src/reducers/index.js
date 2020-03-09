import { combineReducers } from "redux";

import navigationReducer from "./navigation";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  counter: counterReducer
});

export default rootReducer;
