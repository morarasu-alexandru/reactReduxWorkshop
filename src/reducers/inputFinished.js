import cloneDeep from "lodash.clonedeep";
import {inputFinishedActions} from "../actionTypes";

const initialState = {
  value: ""
};

const inputFinishedReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {

    case inputFinishedActions.changeInputFinished: {
      const {newValue} = action.payload;

      newState.value = newValue;

      return newState;
    }

    default:
      return state;

  }
};

export default inputFinishedReducer;
