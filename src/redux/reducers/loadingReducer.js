import { LOADING_ACTION_TOGGLE } from '../actions'
import createReducer from '../../lib/createReducer'

const initialState = false

export const loading = createReducer(initialState, {
  [LOADING_ACTION_TOGGLE](state) {
    return !state
  },
})
