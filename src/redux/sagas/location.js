import { PermissionsAndroid } from 'react-native'
import { call, fork, take, put } from 'redux-saga/effects'
import { getCurrentPosition } from 'redux-saga-location'

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
