import cloneDeep from "lodash.clonedeep";
import {todoFinishedActions} from "../../actionTypes";

const initialState = {
  input: '',
  list: ['throw garbage', 'feed cat', 'go to gym', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7']
};

const todoFinishedReducer = (state = initialState, action) => {

  switch (action.type) {
    case todoFinishedActions.changeTodoInputFinished: {
      const newState = cloneDeep(state);
      const {newValue} = action.payload;

      newState.input = newValue;

      return newState;
    }

    case todoFinishedActions.addTodoToListFinished: {
      const newState = cloneDeep(state);
      newState.list.push(state.input);
      newState.input = "";

      return newState;
    }

    default:
      return state
  }
};

export default todoFinishedReducer
