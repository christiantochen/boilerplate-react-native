import { all, takeLatest, spawn, call } from 'redux-saga/effects'
import { watchLocationChannel, watchCurrentPosition } from 'redux-saga-location'
import { REDUX_SAGA_LOCATION_ACTION_SET_ERROR } from 'redux-saga-location/actions'
import { requestAuthorization } from './location'
import { watchNetworkChannel, watchCurrentNetwork } from './network'

export default function* rootSaga() {
  yield spawn(watchLocationChannel)
  yield spawn(watchNetworkChannel)

  yield call(watchCurrentPosition)
  yield call(watchCurrentNetwork)

  yield takeLatest(REDUX_SAGA_LOCATION_ACTION_SET_ERROR, requestAuthorization)
}
