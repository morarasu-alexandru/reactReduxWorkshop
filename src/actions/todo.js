import {todoActions} from "../actionTypes";

export const changeTodoInput = (newValue) => ({
  type: todoActions.changeTodoInput,
  payload: {newValue}
});

// you can use todoActions.addTodoToList as action type
