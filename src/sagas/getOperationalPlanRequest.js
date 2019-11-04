import { all, put, call, select } from 'redux-saga/effects'
import getOperationalPlanPerPit from '../api/methods/getOperationalPlanPerPit'
import { OperationalPlanAction } from '../actions'

const getOperationalPlan = (state) => state.operationalPlanReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* getOperationalPlanRequest() {
  const operationalPlan = yield select(getOperationalPlan)
  const session = yield select(getSession)
  const { id } = session.selectedPit

  const response = yield call(
    getOperationalPlanPerPit,
    id,
    { lastSyncDate: operationalPlan.lastSyncDate },
    session.token
  )

  if (response.ok) {
    yield put(OperationalPlanAction.getPitOperationalPlanSucceed(id, response.data))
  } else {
    yield put(OperationalPlanAction.getPitOperationalPlanFailed(response))
  }
}
