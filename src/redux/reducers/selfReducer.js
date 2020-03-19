import createReducer from '../../lib/createReducer'
import { SELF_ACTION_SET_PROFILE } from '../actions'

const mockUser = {
  displayName: 'Christianto Chen',
}

const initialState = {
  profile: mockUser,
}

export const self = createReducer(initialState, {
  [SELF_ACTION_SET_PROFILE](state, action) {
    const { profile } = action

    return {
      ...state,
      profile,
    }
  },
})
