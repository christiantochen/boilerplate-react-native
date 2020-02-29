import { TOGGLE_LOADING } from '../actionTypes'
import createReducer from '../../lib/createReducer'

const initialState = false

export const loading = createReducer(initialState, {
  [TOGGLE_LOADING](state) {
    return !state
  },
})
