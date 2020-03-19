import { NETWORK_ACTION_REQUEST, NETWORK_ACTION_SET_CONNECTION } from '../actions'
import createReducer from '../../lib/createReducer'

const initialState = {}

export const network = createReducer(initialState, {
  [NETWORK_ACTION_SET_CONNECTION](state, action) {
    const { connection } = action
    console.log(connection)

    return {
      ...connection,
    }
  },
})
