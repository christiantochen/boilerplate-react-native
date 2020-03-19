import createReducer from '../../lib/createReducer'
import { AUTH_ACTION_SET_TOKEN, AUTH_ACTION_LOGIN, AUTH_ACTION_SET_ERROR, AUTH_ACTION_LOGOUT } from '../actions'

const initialState = {
  username: undefined,
  token: undefined,
  refreshToken: undefined,
  error: undefined,
}

export const auth = createReducer(initialState, {
  [AUTH_ACTION_LOGIN](state, action) {
    const { username } = action

    return {
      ...state,
      username,
      error: null,
    }
  },
  [AUTH_ACTION_SET_TOKEN](state, action) {
    const { token, refreshToken } = action

    return {
      ...state,
      token,
      refreshToken,
      error: null,
    }
  },
  [AUTH_ACTION_SET_ERROR](state, action) {
    const { error } = action

    return {
      ...state,
      error,
    }
  },
  [AUTH_ACTION_LOGOUT](state) {
    return initialState
  },
})
