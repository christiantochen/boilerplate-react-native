import { call, put, takeLatest } from 'redux-saga/effects'

import api from '../../api'
import {
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGOUT,
  AUTH_ACTION_SET_ERROR,
  AUTH_ACTION_SET_TOKEN,
  LOADING_ACTION_SET_END,
  LOADING_ACTION_SET_START,
} from '../actions'

function* login(action) {
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

function* logout() {}

export default function* saga() {
  yield takeLatest(AUTH_ACTION_LOGIN, login)
  yield takeLatest(AUTH_ACTION_LOGOUT, logout)
}
