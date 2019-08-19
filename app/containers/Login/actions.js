/*
 * Reducer actions related with login
 */
import * as types from '../../fixtures/actionTypes';

export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

