import {solvingStepsActions} from "../actionTypes";

export const toggleStepIsDone = (listNumber, itemIndex) => ({
  type: solvingStepsActions.toggleStepIsDone,
  payload: {listNumber, itemIndex}
});

