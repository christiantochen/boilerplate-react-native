import { all, put, call, select } from 'redux-saga/effects'
import getAllChecklist from '../api/methods/getAllChecklist'
import { ChecklistAction } from '../actions'

const getChecklist = (state) => state.checklistReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* getContractorRequest(action) {
  const checklistInfo = yield select(getChecklist)
  const session = yield select(getSession)
  const { id } = session.selectedPit
  const { types } = action.opts

  for (const type of types) {
    console.log('getContractorRequest for')
    const response = yield call(
      getAllChecklist,
      { type, lastSyncDate: checklistInfo.lastSyncDate, pitId: id },
      session.token
    )

    if (response.ok) {
      yield put(ChecklistAction.getChecklistSucceed(id, type, response.data))
    } else {
      yield put(ChecklistAction.getChecklistFailed(response))
    }
  }
}
