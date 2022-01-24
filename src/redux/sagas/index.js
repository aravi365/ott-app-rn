/**
 *  Redux saga class init
 */
import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import listSaga from './listSaga';
export default function* watch() {
  yield all([takeEvery(types.FETCH_DATA, listSaga)]);
}
