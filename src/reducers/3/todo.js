import cloneDeep from "lodash.clonedeep";
import {todoActions} from "../../actionTypes";

const initialState = {
  input: '',
  list: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'throw garbage', 'feed cat', 'go to gym']
};

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case todoActions.changeTodoInput: {
      const newState = cloneDeep(state);
      const {newValue} = action.payload;

      newState.input = newValue;

      return newState;
    }

    default:
      return state
  }
};

export default todoReducer;
