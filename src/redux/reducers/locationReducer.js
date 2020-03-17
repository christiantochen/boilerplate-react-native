import { LOCATION_ACTION_REQUEST, LOCATION_ACTION_SET_POSITION, LOCATION_ACTION_SET_ERROR } from '../actions'
import createReducer from '../../lib/createReducer'

const initialState = {
  position: null,
  error: null,
  fetching: false,
}

export const location = createReducer(initialState, {
  [LOCATION_ACTION_REQUEST](state) {
    return {
      ...state,
      fetching: true,
    }
  },
  [LOCATION_ACTION_SET_POSITION](state, action) {
    const { position } = action

    return {
      ...state,
      position,
      error: null,
      fetching: false,
    }
  },
  [LOCATION_ACTION_SET_ERROR](state, action) {
    const { error } = action

    return {
      ...state,
      error: error,
      fetching: false,
    }
  },
})
