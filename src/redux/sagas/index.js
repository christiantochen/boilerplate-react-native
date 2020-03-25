import { all, call, spawn, takeLatest } from 'redux-saga/effects'

import { AUTH_ACTION_LOGIN, LOCATION_ACTION_SET_ERROR } from '../actions'
import { login } from './auth'
import { requestAuthorization, watchCurrentPosition, watchLocationChannel } from './location'
import { watchCurrentNetwork, watchNetworkChannel } from './network'

export default function* rootSaga() {
  yield spawn(watchLocationChannel)
  yield spawn(watchNetworkChannel)

  yield call(watchCurrentPosition)
  yield call(watchCurrentNetwork)

  yield takeLatest(AUTH_ACTION_LOGIN, login)
  yield takeLatest(LOCATION_ACTION_SET_ERROR, requestAuthorization)
}
