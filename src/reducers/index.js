import { combineReducers } from "redux";

import navigationReducer from "./other/navigation";
import counterReducer from "./1/counter";
import counterFinishedReducer from "./1/counterFinished";
import inputReducer from "./2/input";
import inputFinishedReducer from "./2/inputFinished";
import solvingStepsReducer from "./other/solvingSteps";
import todoFinishedReducer from "./3/todoFinished";
import todoReducer from "./3/todo";
import postsFinishedReducer from "./4/postsFinished";
import postsReducer from "./4/posts";
import animationFinished from "./5/animationFinished";
import animation from "./5/animation";

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
  animateFinished: animationFinished,
  animate: animation,
});

export default rootReducer;
