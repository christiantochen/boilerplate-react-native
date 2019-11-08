import { put, call, select } from 'redux-saga/effects'
import NavigationService from 'app/navigation/NavigationService'
import getOperationalPlanPerPit from '../api/methods/getOperationalPlanPerPit'
import { OperationalPlanAction } from '../actions'

const getOperationalPlan = (state) => state.operationalPlanReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* pitSelected(action) {
  const operationalPlan = yield select(getOperationalPlan)
  const session = yield select(getSession)
  const { selectedPit, selectedContractor, token } = session

  if (selectedPit && selectedContractor) {
    const response = yield call(
      getOperationalPlanPerPit,
      selectedPit.id,
      { lastSyncDate: operationalPlan.lastSyncDate },
      session.token
    )

    if (response.ok) {
      yield put(OperationalPlanAction.getPitOperationalPlanSucceed(selectedPit.id, response.data))
      yield call(NavigationService.navigate, 'App')
    } else {
      yield put(OperationalPlanAction.getPitOperationalPlanFailed(response))
    }
  }
}
