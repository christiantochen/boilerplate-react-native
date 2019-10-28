/*
 * Reducer actions related with login
 */
import { LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED } from '../fixtures/actionTypes'

export default {
  loginRequest(username, password) {
    return {
      type: LOGIN_REQUEST,
      username,
      password,
    }
  },
  loginSucceed(response) {
    return {
      type: LOGIN_SUCCEED,
      response,
    }
  },
  loginFailed() {
    return {
      type: LOGIN_FAILED,
    }
  },
}
