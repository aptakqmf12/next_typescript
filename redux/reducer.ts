import {} from "react-redux";
import { ActionFromReducer } from "redux";

export const ADD_COUNT = "ADD_COUNT";
export const MINUS_COUNT = "MINUS_COUNT";

const INITIAL_STATE = {
  count: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state.count + 1;
    case MINUS_COUNT:
      return state.count - 1;
    default:
      return state;
  }
};
