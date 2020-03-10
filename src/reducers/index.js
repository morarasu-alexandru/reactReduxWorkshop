import { combineReducers } from "redux";

import navigationReducer from "./navigation";
import counterReducer from "./counter";
import counterFinishedReducer from "./counterFinished";
import inputReducer from "./input";
import inputFinishedReducer from "./inputFinished";
import solvingStepsReducer from "./solvingSteps";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  counter: counterReducer,
  counterFinished: counterFinishedReducer,
  input: inputReducer,
  inputFinished: inputFinishedReducer,
  solvingSteps: solvingStepsReducer,
});

export default rootReducer;
