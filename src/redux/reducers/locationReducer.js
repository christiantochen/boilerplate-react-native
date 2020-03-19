import { LOCATION_ACTION_REQUEST, LOCATION_ACTION_SET_POSITION, LOCATION_ACTION_SET_ERROR } from '../actions'
import createReducer from '../../lib/createReducer'

const mockData = [
  {
    id: 1,
    name: 'Home',
    latitude: -6.2028364,
    longitude: 106.7831679,
  },
  {
    id: 2,
    name: 'Work',
    latitude: -6.262851,
    longitude: 106.781855,
  },
]

const initialState = {
  data: [...mockData],
  position: null,
  error: null,
}

export const location = createReducer(initialState, {
  [LOCATION_ACTION_SET_POSITION](state, action) {
    const { position } = action

    return {
      ...state,
      position,
      error: null,
    }
  },
  [LOCATION_ACTION_SET_ERROR](state, action) {
    const { error } = action

    return {
      ...state,
      error: error,
    }
  },
})
