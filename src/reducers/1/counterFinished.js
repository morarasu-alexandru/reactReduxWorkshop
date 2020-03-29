import cloneDeep from "lodash.clonedeep";
import {counterFinishedActions} from "../../actionTypes";

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case counterFinishedActions.decrement: {
      const newState = cloneDeep(state);
      newState.value = state.value - 1;

      return newState;
    }

    case counterFinishedActions.increment: {
      const newState = cloneDeep(state);
      newState.value = state.value + 1;

      return newState;
    }

    default:
      return state;
  }
};

export default counterReducer;
