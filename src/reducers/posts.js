import cloneDeep from 'lodash.clonedeep';

import { postsActions } from '../actionTypes'

const initialValue = {
  posts: [],
  isLoading: false
};

const postsReducer = (state = initialValue, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    default:
      return state

  }
};

export default postsReducer;
