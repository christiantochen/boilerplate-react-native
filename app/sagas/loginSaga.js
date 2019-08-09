import { put, call, select } from 'redux-saga/effects';
import loginApi from 'app/api/methods/login';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* login(action) {
    yield put(loginActions.enableLoader());

    const response = yield call(loginApi, action.username, action.password);

    if (response.ok) {
        yield put(loginActions.onLoginResponse(response.data));
        yield put(loginActions.disableLoader({}));
        yield call(navigationActions.navigateToApp, null, { replaceStack: true });
    } else {
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
    }
}
