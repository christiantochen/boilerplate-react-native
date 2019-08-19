import { put, call, select } from 'redux-saga/effects';
import getAllContractorApi from 'app/api/methods/getAllContractor';
import * as actions from 'app/store/contractors/action';

export const getContractor = (state) => state.contractorReducer

// Our worker Saga that logins the user
export default function* pitSelection(action) {

    const contractorInfo = yield select(getContractor);

    const response = yield call(getAllContractorApi, { ...action.opts, lastSyncDate: contractorInfo.lastSyncDate });

    if (response.ok) {
        yield put(actions.onGetAllContractorResponse({ contractors: response.data, lastSyncDate: new Date() }));
    } else {
        console.log(response);
        yield put(actions.onRequestFailed());
    }

}
