/**
 *  Redux saga class init
 */
import { takeEvery, all } from "redux-saga/effects";
import * as types from "../actions/types";

export default function* watch() {
  yield all([]);
}
