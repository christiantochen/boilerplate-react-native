import { NETWORK_ACTION_REQUEST, NETWORK_ACTION_SET_CONNECTION } from '../actions'
import createReducer from '../../lib/createReducer'

const initialState = {
  connection: undefined,
  watching: false,
}

export const network = createReducer(initialState, {
  [NETWORK_ACTION_REQUEST](state) {
    return {
      ...state,
      watching: true,
    }
  },
  [NETWORK_ACTION_SET_CONNECTION](state, action) {
    const { connection } = action

    return {
      ...state,
      connection,
    }
  },
})
