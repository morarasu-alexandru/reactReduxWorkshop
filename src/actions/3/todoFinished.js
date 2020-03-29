import {todoFinishedActions} from '../../actionTypes';

export const changeTodoInputFinished = (newValue) => ({
  type: todoFinishedActions.changeTodoInputFinished,
  payload: {newValue}
});

export const addTodoFinished = () => ({
  type: todoFinishedActions.addTodoToListFinished
});
