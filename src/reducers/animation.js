import cloneDeep from 'lodash.clonedeep';
import { animationActions } from "../actionTypes";

const initialState = {
  animateValue: {
    x: 0,
    y: 0,
  }
};

const animation = (state = initialState, action) => {

  switch (action.type) {

    case animationActions.changeAnimateValue: {
      const newState = cloneDeep(state);
      const {newValue} = action.payload;

      newState.animateValue = newValue;

      return newState;
    }

    default:
      return state
  }
};

export default animation;
