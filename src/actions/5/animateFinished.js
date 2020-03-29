import { animationFinishedActions } from "../../actionTypes";

export const changeAnimateValueFinished = (newValue) => ({
  type: animationFinishedActions.changeAnimateValue,
  payload: {newValue}
});
