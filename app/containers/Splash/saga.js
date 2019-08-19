import { call, select } from 'redux-saga/effects';
import NavigationService from 'app/navigation/NavigationService';

export const getLoginInfo = (state) => state.loginReducer

// Our worker Saga that logins the user
export default function* onSplashScreenReady(action) {
    const loginInfo = yield select(getLoginInfo);
    
    if (loginInfo.token) {
        yield call(NavigationService.navigate, 'App', null, { replaceStack: true });
    } else {
        yield call(NavigationService.navigate, 'Login', { token: loginInfo.token }, { replaceStack: true });
    }
}
