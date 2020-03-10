import {inputFinishedActions} from '../actionTypes';

export const changeInputFinished = (newValue) => ({
  type: inputFinishedActions.changeInputFinished,
  payload: {newValue}
});
