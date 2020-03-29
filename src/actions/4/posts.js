import { postsActions } from "../../actionTypes";

export const getPosts = () => ({
  type: postsActions.getPosts
});

export const getPostsFulfilled = (data) => ({
  type: postsActions.getPostsFulfilled,
  payload: {data}
});
