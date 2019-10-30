import { put, call, select } from 'redux-saga/effects'
import NavigationService from 'app/navigation/NavigationService'

const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* pitSelected(action) {
  const session = yield select(getSession)
  const { selectedPit, selectedContractor, token } = session

  if (selectedPit && selectedContractor) {
    yield call(NavigationService.navigate, 'App', { session })
  }
}
