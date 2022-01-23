import {put, call} from 'redux-saga/effects';
import {json} from '../../api/data';

import * as listActions from '../actions/listActions';
export default function* listSaga(action) {
  yield put(listActions.toggleLoader(true));
  function getData() {
    return json['page' + action.page];
  }
  const response = yield call(getData);
  yield put(listActions.storeData(response));
}
