/*
 * Reducer actions related with login
 */
import * as types from '../../fixtures/actionTypes';

export function requestContractors(opts = {}) {
    return {
        type: types.CONTRACTOR_REQUEST,
        opts
    };
}

export function onRequestFailed() {
    return {
        type: types.CONTRACTOR_REQUEST_FAILED
    };
}

export function onGetAllContractorResponse(response) {
    return {
        type: types.CONTRACTOR_RESPONSE,
        response
    };
}
