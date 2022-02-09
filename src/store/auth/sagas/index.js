import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import getBusinessInfo from './getBusinessInfo';

export default function* authSaga() {
  yield all([takeLatest(types.AUTH_GET_BUSINESS_INFO, getBusinessInfo)]);
}
