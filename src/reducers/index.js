import { combineReducers } from "redux";

import navigationReducer from "./navigation";
import counterReducer from "./counter";
import counterFinishedReducer from "./counterFinished";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  counter: counterReducer,
  counterFinished: counterFinishedReducer,
});

export default rootReducer;
