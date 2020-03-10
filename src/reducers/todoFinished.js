import cloneDeep from "lodash.clonedeep";
import {todoFinishedActions} from "../actionTypes";

const initialValue = {
  input: '',
  list: ['throw garbage', 'feed cat', 'go to gym']
};

const todoFinishedReducer = (state = initialValue, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case todoFinishedActions.changeTodoInputFinished: {
      const {newValue} = action.payload;

      newState.input = newValue;

      return newState;
    }

    case todoFinishedActions.addTodoToListFinished: {
      newState.list.push(state.input);
      newState.input = "";

      return newState;
    }

    default:
      return state
  }
};

export default todoFinishedReducer
