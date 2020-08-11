import { delay, put, takeLatest } from 'redux-saga/effects'

import { INITIALIZE_ACTION_SET_END, INITIALIZE_ACTION_SET_START } from '../actions'

function* initialize() {
  yield delay(2000)

  yield put({ type: INITIALIZE_ACTION_SET_END })
}

export default function* saga() {
  yield takeLatest(INITIALIZE_ACTION_SET_START, initialize)
}
