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

export function loginSucceed(response) {
    return {
        type: types.LOGIN_SUCCEED,
        response
    };
}

export function requestTokenRefresh(refreshToken) {
    return {
        type: types.TOKEN_REFRESH_REQUEST,
        refreshToken
    }
}

export function tokenRefreshSucceed(refreshToken) {
    return {
        type: types.TOKEN_REFRESH_SUCCEED,
        refreshToken
    }
}

export function tokenRefreshFailed(refreshToken) {
    return {
        type: types.TOKEN_REFRESH_FAILED,
        refreshToken
    }
}

