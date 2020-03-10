import {todoActions} from "../actionTypes";

export const changeTodoInput = (newValue) => ({
  type: todoActions.changeTodoInput,
  payload: {newValue}
});
