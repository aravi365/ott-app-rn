import * as types from "./types";

export function toggleLoader(flag) {
  return {
    type: types.IS_LOADING,
    flag,
  };
}
