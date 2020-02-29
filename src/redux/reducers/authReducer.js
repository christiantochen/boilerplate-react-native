import { LOGIN_REQUEST } from '../actionTypes'
import createReducer from '../../lib/createReducer'

const initialState = {
  lastLoginDate: '1991-11-22T00:00:00+07',
  data: undefined,
}

export const auth = createReducer(initialState, {
  [LOGIN_REQUEST](state, action) {
    return {
      ...state,
    }
  },
})
