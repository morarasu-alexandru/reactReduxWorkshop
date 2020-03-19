import cloneDeep from "lodash.clonedeep";

import { navigationActions } from "../actionTypes";
import {updateLocalStoragePage,getLocalStoragePage} from '../utils/localStorage';

export const pageKeys = {
  "0": "Home",
  "1": "Exercise 1: Counter",
  "2": "Exercise 2: Input",
  "3": "Exercise 3: Todo List",
  "4": "Exercise 4: Get posts"
};

const initialState = {
  page: pageKeys[0]
};

const navigationReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case navigationActions.changePage: {
      const {page} = action.payload;
      newState.page = page;

      updateLocalStoragePage(page);

      return newState;
    }


    default:
      return state;
  }
};

export default navigationReducer;
