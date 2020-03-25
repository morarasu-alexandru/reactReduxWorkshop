import cloneDeep from "lodash.clonedeep";

const initialState = {
  value: ""
};

const inputReducer = (state = initialState, action) => {

  switch (action.type) {

    // const newState = cloneDeep(state);

    default:
      return state;

  }
};

export default inputReducer;
