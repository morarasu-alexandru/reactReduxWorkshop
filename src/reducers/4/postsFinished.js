import cloneDeep from 'lodash.clonedeep';

import { postsFinishedActions } from '../../actionTypes'

const initialState = {
  list: [],
  isLoading: false
};

const postsFinishedReducer = (state = initialState, action) => {

  switch (action.type) {
    case postsFinishedActions.getPosts: {
      const newState = cloneDeep(state);
      newState.isLoading = true;

      return newState
    }

    case postsFinishedActions.getPostsFulfilled: {
      const newState = cloneDeep(state);
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
