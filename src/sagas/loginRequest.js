import { put, call, select } from 'redux-saga/effects';
import loginApi from '../api/methods/login';
import { LoginAction } from '../actions';
import NavigationService from 'app/navigation/NavigationService';

// Our worker Saga that logins the user
export default function* loginRequest(action) {
  const response = yield call(loginApi, action.username, action.password);

  if (response.ok) {
    yield put(LoginAction.loginSucceed(response.data));
    yield call(NavigationService.navigate, 'PitSelection', null);
  } else {
    yield put(LoginAction.loginFailed());
  }
}
