// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// constant objects
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// action creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(text) {
  return { type: TOGGLE_TODO, text };
}

export function setVisibilityFilter(text) {
  return { type: SET_VISIBILITY_FILTER, text };
}
