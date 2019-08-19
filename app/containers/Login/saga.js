import { put, call, select } from 'redux-saga/effects';
import loginApi from 'app/api/methods/login';
import * as actions from '../../models/sessions/action';
import NavigationService from 'app/navigation/NavigationService';

// Our worker Saga that logins the user
export default function* login(action) {

    const response = yield call(loginApi, action.username, action.password);

    if (response.ok) {
        yield put(actions.loginSucceed(response.data));
        yield call(NavigationService.navigate, 'PitSelection', null, { replaceStack: true });
    } else {
        yield put(actions.loginFailed());
    }
}
