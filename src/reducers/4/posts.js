import cloneDeep from 'lodash.clonedeep';

import { postsActions } from '../../actionTypes'

const initialState = {
  list: [],
  isLoading: false
};

const postsReducer = (state = initialState, action) => {

  switch (action.type) {

    // const newState = cloneDeep(state);

    default:
      return state

  }
};

export default postsReducer;
