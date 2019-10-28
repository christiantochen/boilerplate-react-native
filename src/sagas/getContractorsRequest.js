import { put, call, select } from 'redux-saga/effects'
import getAllContractor from '../api/methods/getAllContractor'
import { ContractorAction } from '../actions'
import NavigationService from 'app/navigation/NavigationService'

const getContractor = (state) => state.contractorReducer
const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* getContractorRequest(action) {
  const contractorInfo = yield select(getContractor)
  const session = yield select(getSession)

  const response = yield call(
    getAllContractor,
    { ...action.opts, lastSyncDate: contractorInfo.lastSyncDate },
    session.token
  )

  if (response.ok) {
    yield put(ContractorAction.getContractorSucceed(response.data))
    yield call(NavigationService.navigate, 'PitSelection', null)
  } else {
    yield put(ContractorAction.getContractorFailed())
  }
}
