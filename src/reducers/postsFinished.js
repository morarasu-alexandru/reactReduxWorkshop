import cloneDeep from 'lodash.clonedeep';

import { postsFinishedActions } from '../actionTypes'

const initialValue = {
  posts: [],
  isLoading: false
};

const postsFinishedReducer = (state = initialValue, action) => {
  const newState = cloneDeep(state);

  switch (action.type) {
    case postsFinishedActions.getPosts: {
      newState.isLoading = true;

      return newState
    }

    case postsFinishedActions.getPostsFulfilled: {
      const {data} = action.payload;
      newState.isLoading = false;

      newState.posts = data;

      return newState
    }

    default:
      return state
  }

};

export default postsFinishedReducer;
