/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/fixtures/actionTypes';

const initialState = {
    isLoggedIn: false,
    username: 'supervisor',
    password: 'admin',
    token: undefined,
    refreshToken: undefined,
    displayName: undefined,
    displayProfileUrl: undefined
};

export const sessionReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_SUCCEED](state, action) {
        return {
            ...state,
            isLoggedIn: true,
            ...action.response
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    },
    [types.TOKEN_REFRESH_REQUEST](state, action) {
        return {
            ...state
        };
    },
    [types.TOKEN_REQUEST_SUCCEED](state) {
        return {
            ...state,
            ...action.response
        };
    },
    [types.TOKEN_REQUEST_FAILED](state) {
        return {
            ...state,
            token: undefined,
            isLoggedIn: false
        };
    },
});
