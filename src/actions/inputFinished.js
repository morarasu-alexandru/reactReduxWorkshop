import {inputFinishedActions} from '../actionTypes';

export const changeTodoInputFinished = (newValue) => ({
  type: inputFinishedActions.changeInputFinished,
  payload: {newValue}
});
