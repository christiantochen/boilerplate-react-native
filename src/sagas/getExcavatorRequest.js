import { all, put, call, select } from 'redux-saga/effects'
import getExcavatorPlanPerPit from '../api/methods/getExcavatorPlanPerPit'
import { ExcavatorAction } from '../actions'

const getExcavator = (state) => state.excavatorReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* getExcavatorRequest() {
  const excavatorInfo = yield select(getExcavator)
  const session = yield select(getSession)
  const { id } = session.selectedPit

  const response = yield call(
    getExcavatorPlanPerPit,
    id,
    { lastSyncDate: excavatorInfo.lastSyncDate },
    session.token
  )

  if (response.ok) {
    yield put(ExcavatorAction.getExcavatorSucceed(id, response.data))
  } else {
    yield put(ExcavatorAction.getExcavatorFailed(response))
  }
}
