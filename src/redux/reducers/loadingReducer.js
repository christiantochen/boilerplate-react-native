import { LOADING_ACTION_SET_START, LOADING_ACTION_SET_END } from '../actions'
import createReducer from '../createReducer'

const initialState = false

const setStart = () => true
const setEnd = () => false

export const loading = createReducer(initialState, {
  [LOADING_ACTION_SET_START]: setStart,
  [LOADING_ACTION_SET_END]: setEnd,
})
