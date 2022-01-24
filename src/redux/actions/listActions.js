import * as types from './types';

export function toggleLoader(flag) {
  return {
    type: types.IS_LOADING,
    flag,
  };
}
export function fetchData(page) {
  return {
    type: types.FETCH_DATA,
    page,
  };
}
export function storeData(data) {
  return {
    type: types.STORE_DATA,
    data,
  };
}
export function searchMovie(string) {
  return {
    type: types.SEARCH_MOVIE,
    string,
  };
}
