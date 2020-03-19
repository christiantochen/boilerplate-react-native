import { all, takeLatest, spawn, call } from 'redux-saga/effects'
import { watchLocationChannel, watchCurrentPosition, requestAuthorization } from './location'
import { watchNetworkChannel, watchCurrentNetwork } from './network'
import { LOCATION_ACTION_SET_ERROR, AUTH_ACTION_LOGIN } from '../actions'
import { login } from './auth'

export default function* rootSaga() {
  yield spawn(watchLocationChannel)
  yield spawn(watchNetworkChannel)

  yield call(watchCurrentPosition)
  yield call(watchCurrentNetwork)

  yield takeLatest(AUTH_ACTION_LOGIN, login)
  yield takeLatest(LOCATION_ACTION_SET_ERROR, requestAuthorization)
}
