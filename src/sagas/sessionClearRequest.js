import { all, put, call, select } from 'redux-saga/effects'
import logoutApi from '../api/methods/logout'
import { SessionAction } from '../actions'

const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* sessionClearRequest(action) {
  const session = yield select(getSession)
  const { token } = session

  yield all([put(SessionAction.sessionCleared()), call(logoutApi, token)])
}
