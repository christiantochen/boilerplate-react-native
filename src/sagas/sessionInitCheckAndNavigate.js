import { call, select } from 'redux-saga/effects'
import NavigationService from 'app/navigation/NavigationService'

const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* sessionInitCheckAndNavigate() {
  const session = yield select(getSession)
  const { token, selectedPit, selectedContractor } = session

  if (token) {
    if (selectedPit && selectedContractor) {
      yield call(NavigationService.navigate, 'App', { session })
    } else {
      yield call(NavigationService.navigate, 'PitSelection', null)
    }
  } else {
    yield call(NavigationService.navigate, 'Login', null)
  }
}
