import { call, select } from 'redux-saga/effects';
import NavigationService from 'app/navigation/NavigationService';

export const getSession = (state) => state.sessionReducer
export const getSelectedPit = (state) => state.pitSelectionReducer

// Our worker Saga that logins the user
export default function* onSplashScreenReady(action) {
    const session = yield select(getSession);
    const pitInfo = yield select(getSelectedPit);

    if (session.token) {
        if (pitInfo && pitInfo.selectedPit) {
            yield call(NavigationService.navigate, 'App', null, { replaceStack: true });
        } else {
            yield call(NavigationService.navigate, 'PitSelection', null, { replaceStack: true });
        }
    } else {
        yield call(NavigationService.navigate, 'Login', null, { replaceStack: true });
    }
}
