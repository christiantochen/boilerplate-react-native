import { put, call, select } from 'redux-saga/effects';
import * as navigationActions from 'app/actions/navigationActions';

export const getLogin = (state) => state.loginReducer

// Our worker Saga that logins the user
export default function* onSplashScreenReady(action) {

    const loginInfo = yield select(getLogin);

    if (loginInfo.token) {
        yield call(navigationActions.navigateToApp, null, { replaceStack: true });
    } else {
        yield call(navigationActions.navigateToLogin, { token: loginInfo.token }, { replaceStack: true });
    }
}
