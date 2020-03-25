import cloneDeep from 'lodash.clonedeep';
import { animationFinishedActions } from "../actionTypes";

const initialState = {
  animateValue: {
    x: 0,
    y: 0,
  }
};

const animationFinished = (state = initialState, action) => {

  switch (action.type) {

    case animationFinishedActions.changeAnimateValue: {
      const newState = cloneDeep(state);
      const {newValue} = action.payload;

      newState.animateValue = newValue;

      return newState;
    }

    default:
      return state
  }
};

export default animationFinished;
