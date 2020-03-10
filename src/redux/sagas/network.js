import { channel } from 'redux-saga'
import { take, put, call } from 'redux-saga/effects'
import NetInfo from '@react-native-community/netinfo'
import { NETWORK_ACTION_SET_CONNECTION, NETWORK_ACTION_REQUEST } from '../actions'

export const networkChannel = channel()

export function* watchNetworkChannel() {
  while (true) {
    const action = yield take(networkChannel)
    yield put(action)
  }
}

export function* watchCurrentNetwork() {
  networkChannel.put({ type: NETWORK_ACTION_REQUEST })
  NetInfo.addEventListener((connection) => networkChannel.put({ type: NETWORK_ACTION_SET_CONNECTION, connection }))
}
