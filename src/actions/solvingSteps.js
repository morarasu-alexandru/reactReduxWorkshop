import {solvingStepsActions} from "../actionTypes";

export const toggleStepIsDone = (listNumber, itemIndex) => ({
  type: solvingStepsActions.toggleStepIsDone,
  payload: {listNumber, itemIndex}
});

export const updateSteps = (steps) => ({
  type: solvingStepsActions.updateSteps,
  payload: {steps}
});
