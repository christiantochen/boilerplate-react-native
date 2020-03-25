import { LOCATION_ACTION_SET_ERROR, LOCATION_ACTION_SET_POSITION } from '../actions'
import createReducer from '../createReducer'

const initialState = {
  data: [],
  position: undefined,
  error: undefined,
}

const setPosition = (state, action) => {
  const { position } = action

  return {
    ...state,
    position,
    error: undefined,
  }
}

const setError = (state, action) => {
  const { error } = action

  return {
    ...state,
    error: error,
  }
}

export const location = createReducer(initialState, {
  [LOCATION_ACTION_SET_POSITION]: setPosition,
  [LOCATION_ACTION_SET_ERROR]: setError,
})
