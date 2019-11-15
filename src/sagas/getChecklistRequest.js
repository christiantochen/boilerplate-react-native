import { all, put, call, select } from 'redux-saga/effects'
import getAllChecklist from '../api/methods/getAllChecklist'
import { ChecklistAction } from '../actions'

const getChecklist = (state) => state.checklistReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* getChecklistRequest(action) {
  const checklistInfo = yield select(getChecklist)
  const session = yield select(getSession)
  const { id } = session.selectedPit
  const { lastSyncDate } = checklistInfo[id] || { lastSyncDate: undefined }
  const { types } = action.opts

  for (const checklistType of types) {
    const response = yield call(getAllChecklist, { type: checklistType, lastSyncDate, pitId: id }, session.token)

    if (response.ok) {
      yield put(ChecklistAction.getChecklistSucceed(id, checklistType, response.data))
    } else {
      yield put(ChecklistAction.getChecklistFailed(response))
    }
  }

  yield put(ChecklistAction.getChecklistFinished())
}
