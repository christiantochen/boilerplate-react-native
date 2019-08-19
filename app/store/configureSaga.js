/**
 *  Redux saga class init
 */
import { all, takeLatest } from 'redux-saga/effects';
import * as types from '../fixtures/actionTypes';
import loginSaga from '../containers/Login/saga';
import splashSaga from '../containers/Splash/saga';
import pitSelectionSaga from '../containers/PitSelection/saga';

export default function* watch() {
    console.log(splashSaga, loginSaga, pitSelectionSaga)
    yield all([takeLatest(types.SPLASH_SCREEN_READY, splashSaga)]);
    yield all([takeLatest(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeLatest(types.CONTRACTOR_REQUEST, pitSelectionSaga)])
}
