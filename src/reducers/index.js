import { combineReducers } from "redux";

import navigationReducer from "./navigation";
import counterReducer from "./counter";
import counterFinishedReducer from "./counterFinished";
import inputReducer from "./input";
import inputFinishedReducer from "./inputFinished";
import solvingStepsReducer from "./solvingSteps";
import todoFinishedReducer from "./todoFinished";
import todoReducer from "./todo";
import postsFinishedReducer from "./postsFinished";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  counter: counterReducer,
  counterFinished: counterFinishedReducer,
  input: inputReducer,
  inputFinished: inputFinishedReducer,
  solvingSteps: solvingStepsReducer,
  todoFinished: todoFinishedReducer,
  todo: todoReducer,
  postsFinished: postsFinishedReducer,
  posts: postsReducer,
});

export default rootReducer;
