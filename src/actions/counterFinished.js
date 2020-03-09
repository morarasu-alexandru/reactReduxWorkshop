import {counterFinishedActions} from "../actionTypes";

export const decrementFinished = () => ({
  type: counterFinishedActions.decrement
});

export const incrementFinished = () => ({
  type: counterFinishedActions.increment
});
