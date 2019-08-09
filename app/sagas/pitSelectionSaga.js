import { put, call, select } from 'redux-saga/effects';
import getAllContractorApi from 'app/api/methods/getAllContractor';
import * as contractorActions from 'app/actions/contractorActions';

export const getContractor = (state) => state.contractorReducer

// Our worker Saga that logins the user
export default function* pitSelection(action) {

    const contractorInfo = yield select(getContractor);

    const response = yield call(getAllContractorApi, { ...action.opts, lastSyncDate: contractorInfo.lastSyncDate });

    if (response.ok) {
        yield put(contractorActions.onGetAllContractorResponse({ contractors: response.data, lastSyncDate: new Date() }));
    } else {
        console.log(response);
        yield put(contractorActions.onRequestFailed());
    }

}
