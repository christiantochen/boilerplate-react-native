import { NETWORK_ACTION_SET_CONNECTION } from '../actions'
import createReducer from '../createReducer'
import { NetInfoStateType } from '@react-native-community/netinfo'

const initialState = {
  type: NetInfoStateType.none,
  isConnected: false,
  isInternetReachable: false,
  isWifiEnabled: false,
  details: undefined,
}

const setConnection = (state, action) => {
  const { connection } = action

  return connection
}

export const network = createReducer(initialState, {
  [NETWORK_ACTION_SET_CONNECTION]: setConnection,
})
