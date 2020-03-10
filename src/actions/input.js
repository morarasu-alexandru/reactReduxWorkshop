import {inputActions} from "../actionTypes";

export const changeInputFinished = (newValue) => ({
  type: inputActions.changeInput,
  payload: {newValue}
});
