import cloneDeep from 'lodash.clonedeep';
import { animationFinishedActions } from "../actionTypes";

const initialValue = {
  animateValue: {
    x: 0,
    y: 0,
  }
};

const animationFinished = (state = initialValue, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {

    case animationFinishedActions.changeAnimateValue: {
      const {newValue} = action.payload;

      newState.animateValue = newValue;

      return newState;
    }

    default:
      return state
  }
};

export default animationFinished;
