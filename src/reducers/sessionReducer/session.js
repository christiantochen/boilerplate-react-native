/* Login Reducer
 * handles login states in the app
 */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  SESSION_CLEARED,
  SESSION_CLEAR_REQUEST,
} from '../../fixtures/actionTypes'

export const initialState = {
  isLoggedIn: false,
  username: undefined,
  password: undefined,
  //
  token: undefined,
  refreshToken: undefined,
  //
  displayName: undefined,
  displayPictureUrl: undefined,
  displayPosition: undefined,
}

export const reducer = {
  [LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    }
  },
  [LOGIN_SUCCEED](state, action) {
    return {
      ...state,
      ...action.response,
      isLoggedIn: true,
      username: undefined,
      password: undefined,
    }
  },
  [LOGIN_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false,
    }
  },
  [SESSION_CLEAR_REQUEST](state) {
    return {
      ...state,
    }
  },
  [SESSION_CLEARED](state) {
    return {
      ...state,
      isLoggedIn: false,
      token: undefined,
      refreshToken: undefined,
      displayName: undefined,
      displayPictureUrl: undefined,
      displayPosition: undefined,
      selectedPit: undefined,
      selectedContractor: undefined,
    }
  },
}
