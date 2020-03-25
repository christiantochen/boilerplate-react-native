import { call, fork, put, take } from 'redux-saga/effects'

import { LOADING_ACTION_SET_START } from '../actions'

export function* login(action) {
  const { username, password } = action

  yield put({ type: LOADING_ACTION_SET_START })
  // api call
  yield put({ type: LOADING_ACTION_SET_END })
}

export function* logout() {
  // clear all user data
}
