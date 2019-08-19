import { put, call, select } from 'redux-saga/effects';
import getAllContractorApi from 'app/api/methods/getAllContractor';
import * as actions from '../../models/contractors/action';

export const getContractor = (state) => state.contractorReducer
export const getSession = (state) => state.sessionReducer

// Our worker Saga that logins the user
export default function* pitSelection(action) {
    const contractorInfo = yield select(getContractor);
    const session = yield select(getSession);

    const response = yield call(getAllContractorApi, { ...action.opts, lastSyncDate: contractorInfo.lastSyncDate }, session.token);

    if (response.ok) {
        yield put(actions.onGetAllContractorResponse({ contractors: response.data, lastSyncDate: new Date() }));
    } else {
        yield put(actions.onRequestFailed());
    }
}
