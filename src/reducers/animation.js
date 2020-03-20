import cloneDeep from 'lodash.clonedeep';
import { animationActions } from "../actionTypes";

const initialValue = {
  animateValue: {
    x: 0,
    y: 0,
  }
};

const animation = (state = initialValue, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {

    case animationActions.changeAnimateValue: {
      const {newValue} = action.payload;

      newState.animateValue = newValue;

      return newState;
    }

    default:
      return state
  }
};

export default animation;
