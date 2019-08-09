/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    contractors: [],
    lastSyncDate: null
};

export const contractorReducer = createReducer(initialState, {
    [types.CONTRACTOR_REQUEST](state, action) {
        return {
            ...state
        };
    },
    [types.CONTRACTOR_RESPONSE](state, action) {
        return {
            ...state,
            lastSyncDate: new Date(),
            ...action.response
        };
    },
    [types.CONTRACTOR_REQUEST_FAILED](state) {
        return {
            ...state
        };
    }
});
