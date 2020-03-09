import cloneDeep from "lodash.clonedeep";
import {counterFinishedActions} from "../actionTypes";

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case counterFinishedActions.decrement: {
      newState.value = state.value - 1;

      return newState;
    }

    case counterFinishedActions.increment: {
      newState.value = state.value + 1;

      return newState;
    }

    default:
      return state;
  }
};

export default counterReducer;
