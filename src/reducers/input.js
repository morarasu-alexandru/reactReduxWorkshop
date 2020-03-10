import cloneDeep from "lodash.clonedeep";

const initialState = {
  value: ""
};

const inputReducer = (state = initialState, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {

    default:
      return state;

  }
};

export default inputReducer;
