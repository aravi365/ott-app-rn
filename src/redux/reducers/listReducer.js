/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoading: false,
  data: [],
  currentPage: 1,
  totalCount: 1,
  dataSearch: [],
};

export const listReducer = createReducer(initialState, {
  [types.IS_LOADING](state, action) {
    return {
      ...state,
      isLoading: action.flag,
    };
  },
  [types.STORE_DATA](state, action) {
    return {
      ...state,
      isLoading: false,
      data: [
        ...state.data,
        ...action['data']['page']['content-items']['content'],
      ],
      currentPage: Number(action['data']['page']['page-num-requested']),
      totalCount: Number(action['data']['page']['total-content-items']),
    };
  },
  [types.SEARCH_MOVIE](state, action) {
    return {
      ...state,
      dataSearch: state.data.filter(item =>
        item.name.toLowerCase().includes(action.string.toLowerCase()),
      ),
    };
  },
});
