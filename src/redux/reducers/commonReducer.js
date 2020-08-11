import {
  INITIALIZE_ACTION_SET_END,
  INITIALIZE_ACTION_SET_START,
  LOADING_ACTION_SET_END,
  LOADING_ACTION_SET_START,
} from '../actions'
import createReducer from '../createReducer'

const initialState = false

export const loading = createReducer(initialState, {
  [LOADING_ACTION_SET_START]: () => true,
  [LOADING_ACTION_SET_END]: () => false,
})

export const initialized = createReducer(initialState, {
  [INITIALIZE_ACTION_SET_START]: () => false,
  [INITIALIZE_ACTION_SET_END]: () => true,
})
