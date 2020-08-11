import Geolocation from '@react-native-community/geolocation'
import { PermissionsAndroid } from 'react-native'
import { channel } from 'redux-saga'
import { call, fork, put, spawn, take, takeLatest } from 'redux-saga/effects'

import { LOCATION_ACTION_REQUEST, LOCATION_ACTION_SET_ERROR, LOCATION_ACTION_SET_POSITION } from '../actions'

const locationChannel = channel()

function* watchLocationChannel() {
  while (true) {
    const action = yield take(locationChannel)
    yield put(action)
  }
}

function* getCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  Geolocation.getCurrentPosition(
    position => locationChannel.put({ type: LOCATION_ACTION_SET_POSITION, position }),
    error => locationChannel.put({ type: LOCATION_ACTION_SET_ERROR, error }),
    options,
  )
}

function* watchCurrentPosition(options) {
  locationChannel.put({ type: LOCATION_ACTION_REQUEST })
  Geolocation.watchPosition(
    position => locationChannel.put({ type: LOCATION_ACTION_SET_POSITION, position }),
    error => locationChannel.put({ type: LOCATION_ACTION_SET_ERROR, error }),
    options,
  )
}

function* checkPermission(action) {
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

export default function* saga() {
  yield spawn(watchLocationChannel)
  yield call(watchCurrentPosition)

  yield takeLatest(LOCATION_ACTION_SET_ERROR, checkPermission)
}
