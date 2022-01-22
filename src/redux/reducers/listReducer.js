/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../lib/createReducer";
import * as types from "../actions/types";

const initialState = {
  isLoading: false,
  data: {},
};

export const listReducer = createReducer(initialState, {
  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.flag,
    };
  },
});
