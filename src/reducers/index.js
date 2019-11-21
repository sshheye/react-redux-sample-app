import { combineReducers } from "redux";

export const test = (state = {}, action) => {
  switch (action.type) {
    case "TEST":
      return state;

    default:
      return state;
  }
};
export const repos = (state = [], action) => {
  switch (action.type) {
    case "ADD_REPOS":
      return action.repos;
    case "CLEAR_REPOS":
      return [];
    default:
      return state;
  }
};
export const reducers = combineReducers({
  test,
});
