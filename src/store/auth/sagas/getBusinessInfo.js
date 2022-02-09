import { call, put } from 'redux-saga/effects';
import { getBusinessInfoSuccess } from '../actions';
import * as api from '../api';

export default function* getBusinessInfo({ email }) {
  const { ok, data } = yield call(api.getBusinessInfo, email);

  if (ok) {
    yield put(getBusinessInfoSuccess(data))
  }
}
