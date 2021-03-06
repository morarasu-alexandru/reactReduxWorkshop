export const navigationActions = {
  changePage: "NAVIGATION--CHANGE-PAGE",
};

export const solvingStepsActions = {
  toggleStepIsDone: "SOLVING-STEPS--TOGGLE-IS-DONE",
  updateSteps: "SOLVING-STEPS--UPDATE-STEPS"
};

export const counterActions = {
  increment: "COUNTER--INCREMENT",
  decrement: "COUNTER--DECREMENT"
};

export const counterFinishedActions = {
  increment: "COUNTER--INCREMENT-FINISHED",
  decrement: "COUNTER--DECREMENT-FINISHED"
};

export const inputActions = {
  changeInput: "INPUT--CHANGE-INPUT",
};

export const inputFinishedActions = {
  changeInputFinished: "INPUT--CHANGE-INPUT-FINISHED"
};

export const todoActions = {
  changeTodoInput: "TODO--CHANGE-INPUT",
  addTodoToList: "TODO--ADD-TODO-TO-LIST"
};

export const todoFinishedActions = {
  changeTodoInputFinished: "TODO--CHANGE-INPUT-FINISHED",
  addTodoToListFinished: "TODO--ADD-TODO-TO-LIST-FINISHED"
};

export const postsActions = {
  getPosts: "POSTS--GET",
  getPostsFulfilled: "POSTS--GET-FULFILLED"
};

export const postsFinishedActions = {
  getPosts: "POSTS--GET-FINISHED",
  getPostsFulfilled: "POSTS--GET-FULFILLED-FINISHED"
};

export const animationActions = {
  changeAnimateValue: "ANIMATE--CHANGE-VALUE"
};

export const animationFinishedActions = {
  changeAnimateValue: "ANIMATE--CHANGE-VALUE-FINISHED"
};
