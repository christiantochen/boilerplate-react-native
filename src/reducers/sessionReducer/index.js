/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as session from './session';
import * as refreshToken from './refreshToken';
import * as pitSelection from './pitSelection';

const initialState = {
    ...session.initialState,
    ...refreshToken.initialState,
    ...pitSelection.initialState
};

export const sessionReducer = createReducer(initialState, {
    ...session.reducer,
    ...refreshToken.reducer,
    ...pitSelection.reducer
});
