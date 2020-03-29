import { postsFinishedActions } from '../../actionTypes';

export const getPostsFinished = () => ({
  type: postsFinishedActions.getPosts
});

export const getPostsFulfilledFinished = (data) => ({
  type: postsFinishedActions.getPostsFulfilled,
  payload: {data}
});
