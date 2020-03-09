import cloneDeep from "lodash.clonedeep";

import { navigationActions } from "../actionTypes";

export const pageKeys = {
  home: "HOME",
  first: "1",
  second: "2",
  third: "3",
  forth: "4"
};

const initialState = {
  page: pageKeys.home
};

const navigationReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case navigationActions.changePage: {
      return newState;
    }
    default:
      return state;
  }
};

export default navigationReducer;
