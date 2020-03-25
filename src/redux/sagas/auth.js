import { call, fork, put, take } from 'redux-saga/effects'

import api from '../../api'
import {
  AUTH_ACTION_SET_ERROR,
  AUTH_ACTION_SET_TOKEN,
  LOADING_ACTION_SET_END,
  LOADING_ACTION_SET_START,
} from '../actions'

export function* login(action) {
  const { username, password } = action

  yield put({ type: LOADING_ACTION_SET_START })

  const res = yield call(api.login, username, password)

  if (res.ok) {
    const { token, refreshToken } = res.data
    yield put({ type: AUTH_ACTION_SET_TOKEN, token, refreshToken })
  } else {
    // TODO: DEFINE ERROR STRUCTURES WITH BACKEND
    yield put({ type: AUTH_ACTION_SET_ERROR, error: res.data?.error })
  }

  yield put({ type: LOADING_ACTION_SET_END })
}

export function* logout() {
  // clear all user data
}
