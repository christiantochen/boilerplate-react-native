import {
  AUTH_ACTION_EXPIRED,
  AUTH_ACTION_LOGIN,
  AUTH_ACTION_LOGOUT,
  AUTH_ACTION_SET_ERROR,
  AUTH_ACTION_SET_TOKEN,
} from '../actions'
import createReducer from '../createReducer'

const initialState = {
  username: undefined,
  token: undefined,
  refreshToken: undefined,
  error: undefined,
}

const login = (state, action) => ({ username: action.username })
const logout = (state) => initialState
const expired = (state) => ({ ...state, token: undefined, refreshToken: undefined })

const setToken = (state, action) => {
  const { token, refreshToken } = action

  return {
    ...state,
    token,
    refreshToken,
    error: undefined,
  }
}

const setError = (state, action) => {
  const { error } = action

  return {
    ...state,
    error,
  }
}

export const auth = createReducer(initialState, {
  [AUTH_ACTION_LOGIN]: login,
  [AUTH_ACTION_SET_TOKEN]: setToken,
  [AUTH_ACTION_SET_ERROR]: setError,
  [AUTH_ACTION_LOGOUT]: logout,
  [AUTH_ACTION_EXPIRED]: expired,
})
