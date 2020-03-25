import NetInfo from '@react-native-community/netinfo'
import { channel } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'

import { NETWORK_ACTION_REQUEST, NETWORK_ACTION_SET_CONNECTION } from '../actions'

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
