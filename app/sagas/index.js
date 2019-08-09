/**
 *  Redux saga class init
 */
import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import splashSaga from './splashSaga';
import pitSelectionSaga from './pitSelectionSaga';

export default function* watch() {
    yield all([takeLatest(types.SPLASH_SCREEN_READY, splashSaga)]);
    yield all([takeLatest(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeLatest(types.CONTRACTOR_REQUEST, pitSelectionSaga)])
}
