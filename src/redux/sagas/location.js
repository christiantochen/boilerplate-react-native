import Geolocation from '@react-native-community/geolocation'
import { PermissionsAndroid } from 'react-native'
import { channel } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'

import { LOCATION_ACTION_REQUEST, LOCATION_ACTION_SET_ERROR, LOCATION_ACTION_SET_POSITION } from '../actions'

export const locationChannel = channel()

export function* watchLocationChannel() {
  while (true) {
    const action = yield take(locationChannel)
    yield put(action)
  }
}

export function* getCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  Geolocation.getCurrentPosition(
    position => locationChannel.put({ type: LOCATION_ACTION_SET_POSITION, position }),
    error => locationChannel.put({ type: LOCATION_ACTION_SET_ERROR, error }),
    options,
  )
}

export function* watchCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  Geolocation.watchPosition(
    position => locationChannel.put({ type: LOCATION_ACTION_SET_POSITION, position }),
    error => locationChannel.put({ type: LOCATION_ACTION_SET_ERROR, error }),
    options,
  )
}

export function* requestAuthorization(action) {
  if ([action.error.PERMISSION_DENIED, action.error.POSITION_UNAVAILABLE].includes(action.error.code)) {
    const granted = yield call(PermissionsAndroid.request, PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
      title: 'Location Permission',
      message: 'This App needs access to your location, so we can know where you are.',
    })

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      yield fork(getCurrentPosition)
    }
  }
}

// export function*
