import { spawn } from 'redux-saga/effects'

import authSaga from './auth'
import locationSaga from './location'
import networkSaga from './network'

export default function* rootSaga() {
  yield spawn(locationSaga)
  yield spawn(networkSaga)
  // =======================
  yield spawn(authSaga)
}
