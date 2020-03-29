import { animationActions } from "../../actionTypes";

export const changeAnimateValue = (newValue) => ({
  type: animationActions.changeAnimateValue,
  payload: {newValue}
});
