import cloneDeep from "lodash.clonedeep";
import {inputFinishedActions} from "../actionTypes";

const initialState = {
  value: ""
};

const inputFinishedReducer = (state = initialState, action) => {

  switch (action.type) {

    case inputFinishedActions.changeInputFinished: {
      const newState = cloneDeep(state);
      const {newValue} = action.payload;

      newState.value = newValue;

      return newState;
    }

    default:
      return state;

  }
};

export default inputFinishedReducer;
