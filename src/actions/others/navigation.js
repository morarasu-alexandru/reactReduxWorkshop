import { navigationActions } from "../../actionTypes";

export const changePage = page => ({
  type: navigationActions.changePage,
  payload: { page }
});
