import {inputActions} from "../../actionTypes";

export const changeInput = (newValue) => ({
  type: inputActions.changeInput,
  payload: {newValue}
});
