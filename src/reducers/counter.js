import cloneDeep from "lodash.clonedeep";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    default:
      return state;
  }
};

export default counterReducer;
